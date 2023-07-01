import Button from "@/components/UI/Button";
import React from "react";

const Hero = () => {
  const handleScrollToContactMe = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="border-b-[1px] border-b-gray mb-12 lg:mb-16 relative z-20">
      <div className="text-center sm:text-left sm:max-w-[445px] lg:max-w-[710px]">
        <h1 className="mt-[360px] sm:mt-24 lg:mt-32 text-xlm sm:text-xlt lg:text-xl">
          Nice to meet you!
        </h1>
        <h1 className="mb-6 sm:mb-11 text-xlm sm:text-xlt lg:text-xl">
          I&apos;m{" "}
          <span className=" underline decoration-green">Sasan Salehzadeh.</span>
        </h1>
        <p className="text-base text-gray sm:max-w-[400px] lg:max-w-[450px] mb-6 sm:mb-16 ">
          Based in Iran, I'm a highly skilled and motivated front-end developer
          with expertise in React.js and a passion for creating user-friendly
          web applications
        </p>
      </div>
      <div className="mb-20 sm:mb-12 lg:mb-52 flex  sm:block justify-center">
        <Button onClick={handleScrollToContactMe}>contact me</Button>
      </div>
    </section>
  );
};

export default Hero;
