import React from "react";
// import './Navbar.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li className="">
        <Link to='/' className="text-white hover:text-white">Home</Link>
      </li>
      <li>
        <Link to='/about' className="text-white hover:text-white" >About</Link>
      </li>
      <li>
        <Link to='/skills' className="text-white hover:text-white" >Skills</Link>
      </li>
      <li>
        <Link to='/project' className="text-white hover:text-white">Project</Link>
      </li>
      <li>
        <Link to='/contact' className="text-white hover:text-white">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 z-10 fixed bg-opacity-10 max-w-screen-xl mx-auto ">
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
        <a className="btn btn-ghost normal-case text-xl font-cursive text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-600 {
          
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
