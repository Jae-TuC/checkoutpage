import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <header className="bg-white p-4  md:px-18 xl:hidden lg:px-45 border-b border-gray-200">
      <Image src={logo} alt="logo" />
    </header>
  );
};

export default Navbar;
