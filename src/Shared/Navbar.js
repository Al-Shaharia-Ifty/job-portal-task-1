import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../Firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {/* pc view */}
      <div data-aos="fade-down" className="p-4 hidden lg:flex">
        <div className="flex-auto flex items-center gap-4">
          <Link>
            <h1 className="text-3xl font-semibold">JobFinder</h1>
          </Link>
          <NavLink
            to={"/home"}
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
          {!user ? (
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
          ) : (
            <div
              onClick={() => {
                signOut(auth);
              }}
              className="hover:text-red-500 duration-300 btn btn-outline btn-error"
            >
              Sign Out
            </div>
          )}
        </div>
      </div>
      {/* tab and mobile view */}
      <div className="lg:hidden p-4 flex justify-between items-center">
        <div>
          <Link to={"/home"}>
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
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive
                      ? "nav text-orange-500"
                      : "nav hover:text-orange-500 duration-300"
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
