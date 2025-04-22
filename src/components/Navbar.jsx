import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="bg-gray-700  shadow-lg/30">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
       
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
           
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/"
                  className={({isActive})=> isActive ? "rounded-md hover:bg-gray-700 bg-white   px-3 py-2 text-sm font-medium text-black"
                   : "rounded-md hover:bg-gray-700  px-3 py-2 text-sm font-medium text-white"}
                  aria-current="page"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  className={({isActive})=> isActive ? "rounded-md hover:bg-gray-700 bg-white   px-3 py-2 text-sm font-medium text-black"
                  : "rounded-md hover:bg-gray-700  px-3 py-2 text-sm font-medium text-white"}
                >
                  About
                </NavLink>
                <NavLink
                  to="/service"
                  className={({isActive})=> isActive ? "rounded-md hover:bg-gray-700 bg-white   px-3 py-2 text-sm font-medium text-black"
                  : "rounded-md hover:bg-gray-700  px-3 py-2 text-sm font-medium text-white"}
                >
                  Services
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({isActive})=> isActive ? "rounded-md hover:bg-gray-700 bg-white   px-3 py-2 text-sm font-medium text-black"
                  : "rounded-md hover:bg-gray-700  px-3 py-2 text-sm font-medium text-white"}
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
      <button className="h-10 w-30 bg-blue-400 rounded shadow-2xl/55 text-xl font-medium text-white "> <NavLink to="/dashboard">Dashoard</NavLink></button>
        </div>
         
            

      </div>
    </nav>
  );
};

export default Navbar;

