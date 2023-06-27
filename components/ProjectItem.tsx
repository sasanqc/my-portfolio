import Image from "next/image";

import React from "react";
interface ProjectItemProps {
  name: string;
  image: string;
  codeUrl: string;
  viewUrl: string;
}
const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  image,
  codeUrl,
  viewUrl,
}) => {
  return (
    <div>
      <div className="project  group mb-5  ">
        <div className=" ">
          <Image
            alt={name}
            src={image}
            fill
            className="overflow-hidden lg:group-hover:scale-110 transition-all object-cover"
          />
        </div>

        <div className=" lg:group-hover:flex hidden  flex-col absolute top-1/2 tracking-widest z-50 font-bold translate-y-[-50%] left-1/2 uppercase  translate-x-[-50%] text-center gap-y-12">
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 border-b-[2px] border-b-green hover:text-green transition"
          >
            view project
          </a>

          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-2 border-b-[2px] border-b-green hover:text-green transition"
          >
            view code
          </a>
        </div>
      </div>

      <h3 className="uppercase">{name}</h3>
      <div className="flex lg:hidden font-bold uppercase gap-x-8 mt-3">
        <a
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pb-2 border-b-[2px] border-b-green hover:text-green transition"
        >
          view project
        </a>

        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pb-2 border-b-[2px] border-b-green hover:text-green transition"
        >
          view code
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
