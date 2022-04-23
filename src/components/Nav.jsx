import { NavLink } from "react-router-dom";
import { useRef } from "react";
import logo from "../backgrounds/logo.svg";
import xIcon from "../backgrounds/x-icon.svg";
import menuIcon from "../backgrounds/menu.svg";

const Nav = () => {
  const mbMenu = useRef(null);

  const toggleMenu = () =>
    [
      "opacity-100",
      "opacity-0",
      "pointer-events-none",
      "pointer-events-auto",
    ].map((v) => mbMenu.current.classList.toggle(v));

  return (
    <nav className="absolute flex justify-between align-center w-full px-6 md:pl-10 md:pr-0 lg:pl-14 lg:pr-0 py-6 md:py-0 lg:pt-10">
      <div className="img-container flex align-center">
        <img src={logo} alt="Logo" />
      </div>
      <button onClick={toggleMenu} className="inline-block md:hidden">
        <img src={menuIcon} alt="menu icon" />
      </button>
      <ul
        style={{
          backgroundColor: "rgba(255,255,255, 0.1)",
          backdropFilter: "blur(1rem)",
        }}
        ref={mbMenu}
        className="opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto flex w-64 md:w-auto h-screen md:h-auto fixed top-0 right-0 md:static flex-col md:flex-row md:justify-center gap-9 lg:gap-12 px-8 md:px-12 lg:pl-28 lg:pr-40 font-barlowcond text-w transition-all bg-w z-50"
      >
        <button
          onClick={toggleMenu}
          className="sm:block md:hidden ml-auto mb-16"
        >
          <img src={xIcon} alt="close icon" />
        </button>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "py-9 border-b-3 border-w"
              : "py-9 border-b-3 border-transparent hover:border-wo transition-all duration-300"
          }
        >
          <div className="inline-block flex gap-2.5 w-full h-full">
            <span className="font-bold inline-block md-hidden lg:inline-block">
              00
            </span>
            <h5 className="tracking-wide uppercase">Home</h5>
          </div>
        </NavLink>
        <NavLink
          to="/destination"
          className={({ isActive }) =>
            isActive
              ? "py-9 border-b-3 border-w"
              : "py-9 border-b-3 border-transparent hover:border-wo transition-all duration-300"
          }
        >
          <div className="inline-block flex gap-2.5 w-full h-full">
            <span className="font-bold inline-block md-hidden lg:inline-block">
              01
            </span>
            <h5 className="tracking-wide uppercase">Destination</h5>
          </div>
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) =>
            isActive
              ? "py-9 border-b-3 border-w"
              : "py-9 border-b-3 border-transparent hover:border-wo transition-all duration-300"
          }
        >
          <div className="inline-block flex gap-2.5 w-full h-full">
            <span className="font-bold inline-block md-hidden lg:inline-block">
              02
            </span>
            <h5 className="tracking-wide uppercase">Crew</h5>
          </div>
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) =>
            isActive
              ? "py-9 border-b-3 border-w"
              : "py-9 border-b-3 border-transparent hover:border-wo transition-all duration-300"
          }
        >
          <div className="inline-block flex gap-2.5 w-full h-full">
            <span className="font-bold inline-block md-hidden lg:inline-block">
              03
            </span>
            <h5 className="tracking-wide uppercase">Technology</h5>
          </div>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
