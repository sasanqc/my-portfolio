import ProjectItem from "@/components/ProjectItem";
import Button from "@/components/UI/Button";
import React from "react";
const projects = [
  {
    name: "desging app",
    image: "/assets/images/thumbnail-project-2-large.webp",
  },
  {
    name: "desging app",
    image: "/assets/images/thumbnail-project-2-large.webp",
  },
  {
    name: "desging app",
    image: "/assets/images/thumbnail-project-2-large.webp",
  },
  {
    name: "desging app",
    image: "/assets/images/thumbnail-project-2-large.webp",
  },
];
const Projects = () => {
  return (
    <section className="mb-36">
      <div className="mb-14 lg:mb-20 flex justify-between items-center">
        <h1 className="text-xlm sm:text-xlt lg:text-xl">Projects</h1>
        <Button onClick={() => {}}>contact me</Button>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:gap-y-20  gap-x-5 lg:gap-x-10 ">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectItem name={project.name} image={project.image} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
