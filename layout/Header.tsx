import React from "react";
import Logo from "@/components/Logo";
import SocialLinks from "@/components/SocialLinks";
const Header = () => {
  return (
    <section className="relative flex flex-col sm:flex-row justify-between z-20 items-center gap-y-5">
      <Logo />
      <div className="lg:mr-6">
        <SocialLinks />
      </div>
    </section>
  );
};

export default Header;
