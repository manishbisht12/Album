import React from "react";
import { Link} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-1/3 h-16 bg-black/10 backdrop-blur-sm gap-15  flex  items-center justify-center px-6 text-3xl font-bold mb-10 shadow-lg fixed top-4 left-1/2 transform -translate-x-1/2 z-50   rounded-full border border-white/30">
      
      
      <Link  to="/Home" className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20  hover:text-white transition transform hover:scale-130 cursor-pointer shadow-md">
        <FaHome className="text-green-500 text-2xl" />
      </Link>

      <Link  to="/photos" className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20  hover:text-white transition transform hover:scale-130 cursor-pointer shadow-md">
        <FaImage className="text-green-500 text-2xl " />
      </Link>

      <Link  to="/create" className="w-12 h-12 flex items-center justify-center rounded-full bg-black/20  hover:text-white transition transform hover:scale-130 cursor-pointer shadow-md">
        <IoIosCreate className="text-green-500 text-2xl " />
      </Link>
    </nav>
  );
};

export default Navbar;
