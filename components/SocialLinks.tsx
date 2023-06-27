import React from "react";
import Twitter from "@/icons/icon-twitter.svg";
import LinkedIn from "@/icons/icon-linkedin.svg";
import Frontendmentor from "@/icons/icon-frontend-mentor.svg";
import Github from "@/icons/icon-github.svg";
const SocialLinks = () => {
  return (
    <ul className="flex items-center sm:gap-x-8 gap-x-5  w-fit mx-auto">
      <li className="cursor-pointer hover:text-green transition-colors">
        <a
          target="_blank"
          href="https://github.com/sasanqc"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </li>
      <li className="cursor-pointer hover:text-green transition-colors">
        <a
          target="_blank"
          href="https://www.frontendmentor.io/profile/sasanqc"
          rel="noopener noreferrer"
        >
          <Frontendmentor />
        </a>
      </li>
      <li className="cursor-pointer hover:text-green transition-colors">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sasanqc/"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
      </li>
      <li className="cursor-pointer hover:text-green transition-colors">
        <a
          target="_blank"
          href="https://twitter.com/sasanqc"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
