import React from "react";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
const Header = () => {
  return (
    <section className="relative flex justify-between z-20 items-center">
      <Logo />
      <div className="lg:mr-6">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Header;
