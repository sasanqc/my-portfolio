import React from "react";
import Header from "./Header";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";

const Footer = () => {
  return (
    <section className="flex justify-between py-7 lg:pt-12 lg:pb-24">
      <Logo />
      <SocialLinks />
    </section>
  );
};

export default Footer;
