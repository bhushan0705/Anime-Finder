import React from "react";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "../components/SearchIcon";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-col md:flex-col gap-10 lg:flex-row lg:items-center lg:justify-between p-[2rem]">
        <div>
          <Link to="/" className="LogoText text-4xl font-bold tracking-wider">
            Anime Find
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <SearchIcon></SearchIcon>
        </div>

        <div className="flex lg:gap-6 gap-1 items-center justify-center text-sm">
          <NavLink
            to="/popular"
            className={({ isActive }) =>
              isActive ? "nav-link active " : "nav-link"
            }
          >
            POPULAR
          </NavLink>
          <NavLink
            to="/airing"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            AIRING
          </NavLink>
          <NavLink
            to="/upcoming"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            UPCOMING
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            ABOUT
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
