import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: install lucide-react or use SVGs
import logo from "../assets/icons/utilL.png"
const ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo or Brand */}
       <img src={logo} className="w-20 md:max-w-40"/>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#hero" className="hover:text-[#FF8C17] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#FF8C17] transition">About</a></li>
          <li><a href="#memes" className="hover:text-[#FF8C17] transition">Memes</a></li>
          <li><a href="#chart" className="hover:text-[#FF8C17] transition">Chart</a></li>
          <li><a href="#tokenomics" className="hover:text-[#FF8C17] transition">Tokenomics</a></li>
          <li><a href="#cta" className="hover:text-[#FF8C17] transition">Buy</a></li>
        </ul>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <ul className="flex flex-col px-4 py-2 space-y-2 text-sm">
            <li><a href="#hero" onClick={toggleMenu} className="block hover:text-[#FF8C17]">Home</a></li>
            <li><a href="#about" onClick={toggleMenu} className="block hover:text-[#FF8C17]">About</a></li>
            <li><a href="#memes" onClick={toggleMenu} className="block hover:text-[#FF8C17]">Memes</a></li>
            <li><a href="#chart" onClick={toggleMenu} className="block hover:text-[#FF8C17]">Chart</a></li>
            <li><a href="#tokenomics" onClick={toggleMenu} className="block hover:text-[#FF8C17]">Tokenomics</a></li>
            <li><a href="#cta" onClick={toggleMenu} className="block hover:text-[#FF8C17]">Buy</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default ResponsiveNav;
