"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const modalContentRef = useRef<HTMLDivElement | null>(null);

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

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (
      modalContentRef.current &&
      !modalContentRef.current.contains(e.target as Node)
    ) {
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
    <div className='flex flex-col'>
      <Navbar />
      <div className='container mx-auto py-10'>
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
          >
            <div
              ref={modalContentRef}
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
                  width: "100%",
                  height: "100%",
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
