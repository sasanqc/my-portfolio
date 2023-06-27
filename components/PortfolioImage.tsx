import Image from "next/image";
import React from "react";
import CircleIcon from "@/icons/pattern-circle.svg";
const PortfolioImage = () => {
  return (
    <div className="absolute left-1/2 translate-x-[-50%] sm:left-[unset] sm:translate-x-[0] sm:right-0 sm:lef lg:right-44 z-0 sm:-top-10 sm:overflow-hidden lg:overflow-visible">
      <div className="hidden sm:block">
        <Image
          alt="Sasan Salehzadej"
          src={"/assets/images/image-profile-desktop.webp"}
          width={445}
          height={720}
          className="bg-gray"
        />
      </div>
      <div className="block sm:hidden">
        <Image
          alt="Sasan Salehzadeh"
          src={"/assets/images/image-profile-mobile.webp"}
          width={174}
          height={383}
          className=""
        />
      </div>

      <CircleIcon className="absolute -right-48 bottom-0 sm:-right-16 lg:-left-16 sm:bottom-20" />
    </div>
  );
};

export default PortfolioImage;
