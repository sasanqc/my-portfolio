import SkillItem from "@/components/SkillItem";
import React from "react";
const skills = [
  { title: "HTML5", description: "3 Years Experience" },
  { title: "CSS3", description: "3 Years Experience" },
  { title: "Javascript", description: "3 Years Experience" },
  { title: "React", description: "3 Years Experience" },
  { title: "Sass", description: "3 Years Experience" },
  { title: "Tailwindcss", description: "3 Years Experience" },
  { title: "Typescript", description: "1 Year Experience" },
  { title: "Nextjs", description: "1 Year Experience" },
  { title: "Docker", description: "1 Year Experience" },
];

const Skills = () => {
  return (
    <section className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:gap-y-16 mb-20 sm:mb-36 border-b pb-16 sm:pb-0 sm:border-b-0 border-b-gray">
      {skills.map((skill, index) => (
        <SkillItem
          title={skill.title}
          description={skill.description}
          key={index}
        />
      ))}
    </section>
  );
};

export default Skills;
