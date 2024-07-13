"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Project from "./Project";

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
    <>
      <Navbar />
      <div className='container mx-auto py-10'>
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
    </>
  );
};

export default Projects;
