import { useState } from "react";
import Logo from "./Logo/Logo";
import Navmenu from "./Navmenu/Navmenu";
import Toogle from "../Buttons/Toogle";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // const handleFancyClick = () => setMenuOpen(!false);

  return (
    <div>
      <div className="flex justify-between relative z-2 w-full h-22 items-center px-4 bg-black text-white">
        <Logo></Logo>
        <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu}></Navmenu>
        <Toogle toggleMenu={toggleMenu}></Toogle>
      </div>
    </div>
  );
};

export default Navbar;
