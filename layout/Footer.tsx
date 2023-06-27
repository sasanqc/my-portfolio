import React from "react";
import Header from "./Header";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <section className="flex flex-col text-center sm:flex-row  justify-between py-7 sm:py-0 lg:pt-12 lg:pb-24 gap-y-5">
      <Logo />
      <SocialLinks />
    </section>
  );
};

export default Footer;
