import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {/* pc view */}
      <div className="p-4 hidden lg:flex">
        <div className="flex-auto flex items-center gap-4">
          <Link>
            <h1 className="text-3xl font-semibold">JobFinder</h1>
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
      <div className="lg:hidden p-4 flex justify-between items-center">
        <div>
          <Link>
            <h1 className="text-3xl font-semibold">CareerFinderPlus</h1>
          </Link>
        </div>
        <div>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1 text-2xl">
              <i class="fa-solid fa-bars"></i>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 gap-3"
            >
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav bg-transparent text-orange-500"
                      : "nav bg-transparent hover:text-orange-500 duration-300"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
              <li>
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
