import React from "react";
import Twitter from "@/icons/icon-twitter.svg";
import LinkedIn from "@/icons/icon-linkedin.svg";
import Frontendmentor from "@/icons/icon-frontend-mentor.svg";
import Github from "@/icons/icon-github.svg";
import Link from "next/link";
const SocialLinks = () => {
  return (
    <ul className="flex items-center sm:gap-x-8 gap-x-5  w-fit mx-auto">
      <li className="cursor-pointer hover:text-green transition-colors">
        <Link href={"https://github.com"}>
          <Github />
        </Link>
      </li>
      <li className="cursor-pointer hover:text-green transition-colors">
        <Link href={"https://github.com"}>
          <Frontendmentor />
        </Link>
      </li>
      <li className="cursor-pointer hover:text-green transition-colors">
        <Link href={"https://github.com"}>
          <LinkedIn />
        </Link>
      </li>
      <li className="cursor-pointer hover:text-green transition-colors">
        <Link href={"https://github.com"}>
          <Twitter />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
