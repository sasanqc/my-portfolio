import Image from "next/image";
import React from "react";
import CircleIcon from "@/icons/pattern-circle.svg";
const PortfolioImage = () => {
  return (
    <div className="absolute right-0 lg:right-44 z-0 -top-10 overflow-hidden lg:overflow-visible">
      <Image
        alt="Sasan Salehzadej"
        src={"/assets/images/image-profile-desktop.webp"}
        width={445}
        height={720}
        className="bg-gray"
      />
      <CircleIcon className="absolute -right-16 lg:-left-16 bottom-20" />
    </div>
  );
};

export default PortfolioImage;
