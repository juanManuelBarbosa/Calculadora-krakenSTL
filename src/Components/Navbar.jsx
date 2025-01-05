import React from "react";
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Logo from './Logo.jsx';

export default function Nav() {
  return (
    <Navbar className="bg-gradient-to-r from-[#4f3763] to-[#88629c] h-28 flex items-center justify-center">
      
        <Logo />
        <p className="text-gray-300 text-2xl text-center">
          Calculadora de costos
        </p>
    </Navbar>
  );
}
