import React from "react";
import Logo from "../assets/Logo.svg";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div className="flex justify-between w-full items-center md:w-11/12 md:max-w-[1160px] mx-auto py-4 max-w-screen">
      <NavLink to="/">
        <img src={Logo} alt="logo" loading="lazy" className="h-[32px] w-[160px] hidden md:block" />
      </NavLink>
      <nav>
        <ul className="flex gap-x-5 text-white">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex gap-x-4 items-center">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className="text-white bg-richblack-800 rounded-[8px] border-richblack-700 py-[8px] px-[12px] border-[1px]">Login</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/">
            <button
            className="text-white bg-richblack-800 rounded-[8px] border-richblack-700 py-[8px] px-[12px] border-[1px]"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/signup">
            <button className="text-white bg-richblack-800 rounded-[8px] border-richblack-700 py-[8px] px-[12px] border-[1px]">Signup</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <NavLink to="/dashboard">
            <button className="text-white bg-richblack-800 rounded-[8px] border-richblack-700 py-[8px] px-[12px] border-[1px]">Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navbar;
