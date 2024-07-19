"use client";

import { useState, useEffect, useCallback } from "react";
import Navbar from "../components/Navbar";
import Project from "./Project";
import Footer from "../components/Footer";
import Image from "next/image";
import { FaTimes, FaArrowRight, FaArrowLeft } from "react-icons/fa";

interface Project {
  title: string;
  imageUrls: string[];
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "Project 1",
      imageUrls: [
        "/project-1/1.1.jpg",
        "/project-1/1.2.jpg",
        "/project-1/1.3.jpg",
        "/project-1/1.4.jpg",
      ],
    },
    {
      title: "Project 2",
      imageUrls: [
        "/project-2/2.1.jpg",
        "/project-2/2.2.jpg",
        "/project-2/2.3.jpg",
      ],
    },
    {
      title: "Project 3",
      imageUrls: [
        "/project-3/3.1.jpg",
        "/project-3/3.2.jpg",
        "/project-3/3.3.jpg",
        "/project-3/3.4.jpg",
      ],
    },
  ];

  const handleImageClick = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handlePreviousImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.imageUrls.length - 1 : prevIndex - 1
      );
    }
  }, [selectedProject]);

  const handleNextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.imageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }
  }, [selectedProject]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX !== null) {
      const touchEndX = e.changedTouches[0].clientX;
      if (touchStartX - touchEndX > 50) {
        handleNextImage();
      } else if (touchStartX - touchEndX < -50) {
        handlePreviousImage();
      }
      setTouchStartX(null);
    }
  };

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, handlePreviousImage, handleNextImage]);

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='container mx-auto py-10 flex-grow'>
        <h1 className='text-3xl font-bold text-center text-[#800000] mb-6 font-merriweather'>
          Τα Project μας
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((project) => (
            <div key={project.title} className='flex justify-center'>
              <Project
                title={project.title}
                imageUrl={project.imageUrls[0]}
                onImageClick={() => handleImageClick(project, 0)}
              />
            </div>
          ))}
        </div>
        {selectedProject && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
            onClick={handleOverlayClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                onClick={handleCloseModal}
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  color: "white",
                  fontSize: "2rem",
                  zIndex: 1010,
                }}
              >
                <FaTimes />
              </button>
              <button
                onClick={handlePreviousImage}
                style={{
                  position: "absolute",
                  left: "1rem",
                  color: "white",
                  fontSize: "2rem",
                  zIndex: 1010,
                }}
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={handleNextImage}
                style={{
                  position: "absolute",
                  right: "1rem",
                  color: "white",
                  fontSize: "2rem",
                  zIndex: 1010,
                }}
              >
                <FaArrowRight />
              </button>
              <div
                style={{
                  position: "relative",
                  width: "80%",
                  height: "80%",
                  zIndex: 1005,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedProject.imageUrls[currentImageIndex]}
                  alt={`${selectedProject.title} image ${
                    currentImageIndex + 1
                  }`}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
