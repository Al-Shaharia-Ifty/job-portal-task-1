import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* pc view */}
      <div className="p-4 hidden lg:flex">
        <div className="flex-1 flex items-center gap-4">
          <Link>
            <h1 className="text-3xl font-semibold">CareerFinderPlus</h1>
          </Link>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/contact-us"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            Contact Us
          </NavLink>
        </div>
        <div className="flex-auto flex justify-end items-center gap-4">
          <NavLink
            to={"/signIn"}
            className={({ isActive }) =>
              isActive
                ? "nav text-orange-500"
                : "nav hover:text-orange-500 duration-300"
            }
          >
            Sign In
          </NavLink>
          <NavLink
            to={"/signOut"}
            className={({ isActive }) =>
              isActive
                ? " text-red-500 btn btn-outline btn-error"
                : " hover:text-red-500 duration-300 btn btn-outline btn-error"
            }
          >
            Sign Out
          </NavLink>
        </div>
      </div>
      {/* tab and mobile view */}
      <div className="lg:hidden"></div>
    </div>
  );
};

export default Navbar;
