import React from "react";
// import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="">
        <NavLink to='/' className="text-white hover:text-white">Home</NavLink>
      </li>
      <li>
        <NavLink to='/about' className="text-white hover:text-white" >About</NavLink>
      </li>
      <li>
        <NavLink to='/skills' className="text-white hover:text-white" >Skills</NavLink>
      </li>
      <li>
        <NavLink to='/project' className="text-white hover:text-white">Project</NavLink>
      </li>
      <li>
        <NavLink to='/contact' className="text-white hover:text-white">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 z-10 fixed bg-opacity-10 lg:px-24 mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-xl w-80  bg-gradient-to-r from-purple-500 to-primary "
          >
           {navItems}
          </ul>
        </div>
        <a className=" text-2xl text-transparent bg-clip-text  font-bold bg-gradient-to-r from-fuchsia-700 via-pink-600 to-purple-600 {
          
        }">SHAYKOT_SELIM</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navItems}
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
