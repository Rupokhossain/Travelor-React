import { useEffect, useState } from "react";
import Logo from "./Logo/Logo";
import Navmenu from "./Navmenu/Navmenu";
import Toogle from "../Buttons/Toogle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleFancyClick = () => setMenuOpen(!false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`w-full z-20 flex justify-between items-center fixed top-0 left-0 transition-all duration-300 px-[2%] sm:px-[4%] ${scrolled ? "bg-black" : "bg-transparent"}`}
    >
      <div className="flex justify-between relative z-2 w-full h-22 items-center px-4 text-white">
        <Logo></Logo>
        <Navmenu menuOpen={menuOpen} toggleMenu={toggleMenu}></Navmenu>
        <Toogle toggleMenu={toggleMenu}></Toogle>
      </div>
    </div>
  );
};

export default Navbar;
