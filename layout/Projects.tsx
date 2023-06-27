import ProjectItem from "@/components/ProjectItem";
import Button from "@/components/UI/Button";
import React from "react";
const projects = [
  {
    name: "Kanban task management web app",
    image: "/assets/images/thumbnail-kanban-web-app.webp",
    codeUrl: "https://github.com/sasanqc/kanban-web-app-nextjs",
    viewUrl: "https://kanban-sasanqc.vercel.app/",
  },
  {
    name: "Audiophile e-commerce website",
    image: "/assets/images/thumbnail-audiophile-ecommerce.webp",
    codeUrl: "https://github.com/sasanqc/audiophile-ecommerce-website",
    viewUrl: "https://sasanqc.github.io/audiophile-ecommerce-website/",
  },
  {
    name: "Entertainment web app",
    image: "/assets/images/thumbnail-entertainment-web-app.webp",
    codeUrl: "https://github.com/sasanqc/entertainment-web-app",
    viewUrl: "https://entertainment-web-app-sasanqc.netlify.app/",
  },
  {
    name: "Loopstudios landing page",
    image: "/assets/images/thumbnail-loopstudios-landing-page.webp",
    codeUrl: "https://github.com/sasanqc/loopstudios-landing-page",
    viewUrl: "https://sasanqc.github.io/loopstudios-landing-page/",
  },
];
const Projects = () => {
  const handleScrollToContactMe = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="mb-24 sm:mb-36">
      <div className="mb-14 lg:mb-20 flex justify-between items-center">
        <h1 className="text-xlm sm:text-xlt lg:text-xl">Projects</h1>
        <Button onClick={handleScrollToContactMe}>contact me</Button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:gap-y-20  gap-x-5 lg:gap-x-10 ">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectItem
              name={project.name}
              image={project.image}
              codeUrl={project.codeUrl}
              viewUrl={project.viewUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
