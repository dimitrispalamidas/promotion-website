"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Project from "./Project";
import Footer from "../components/Footer";

interface Project {
  title: string;
  imageUrl: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    { title: "Project 1", imageUrl: "/home-effect/promo.jpg" },
    { title: "Project 2", imageUrl: "/home-effect/promo-02.jpg" },
    { title: "Project 3", imageUrl: "/home-effect/promo-03.jpg" },
  ];

  const handleImageClick = (project: Project) => {
    setSelectedProject(project);
  };

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
                imageUrl={project.imageUrl}
                onImageClick={() => handleImageClick(project)}
              />
            </div>
          ))}
        </div>
        {selectedProject && (
          <div className='modal'>
            {/* Implement modal content to show more images in slide mode */}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
