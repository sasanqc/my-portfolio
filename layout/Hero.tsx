import Button from "@/components/UI/Button";
import React from "react";

const Hero = () => {
  return (
    <section className="border-b-[1px] border-b-gray mb-12 lg:mb-16 relative z-20">
      <div className="max-w-[445px] lg:max-w-[710px]">
        <h1 className="mt-24 lg:mt-32 text-xlt lg:text-xl">
          Nice to meet you!
        </h1>
        <h1 className="mb-11 text-xlt lg:text-xl">
          I&apos;m{" "}
          <span className=" underline decoration-green">Sasan Salehzadeh.</span>
        </h1>
        <p className="text-base text-gray max-w-[400px] lg:max-w-[450px] mb-16">
          Based in Iran, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
      </div>
      <Button onClick={() => {}} classes={"mb-12 lg:mb-52"}>
        contact me
      </Button>
    </section>
  );
};

export default Hero;
