import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const NavLinkItem = ({ to, label, external }) => {
    const isActive = location.pathname === to;
    const baseClass =
      "relative transition-all duration-200 hover:text-orange-400";
    const activeClass = isActive ? "text-orange-400 font-semibold" : "";
    const underline = isActive ? (
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 rounded-full" />
    ) : null;

    if (external) {
      return (
        <li>
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClass} ${activeClass} block py-2`}
          >
            {label}
            {underline}
          </a>
        </li>
      );
    }

    return (
      <li>
        <Link
          to={to}
          className={`${baseClass} ${activeClass} block py-2`}
          onClick={() => setIsOpen(false)}
        >
          {label}
          {underline}
        </Link>
      </li>
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Brand */}
        <Link
          to="/"
          className="text-lg md:text-xl font-bold tracking-wide text-orange-400 hover:text-white transition-all"
        >
          REVA University<span className="text-gray-300">: CSAConnect</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none transition-transform"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm lg:text-base">
          <NavLinkItem to="/" label="Home" />
          <NavLinkItem to="/events" label="Events" />
          <NavLinkItem
            to="https://reva-csaconnect-admin.vercel.app"
            label="Admin"
            external
          />

          {!user ? (
            <>
              <NavLinkItem to="/login" label="Login" />
              <NavLinkItem to="/register" label="Register" />
            </>
          ) : (
            <>
              <NavLinkItem to="/challenges" label="Challenges" />
              <NavLinkItem to="/dashboard" label="Dashboard" />
              <NavLinkItem to="/feed" label="My Feed" />
              <li>
                <button
                  onClick={logout}
                  className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] py-3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-3 px-6 text-base font-medium">
          <NavLinkItem to="/" label="Home" />
          <NavLinkItem to="/events" label="Events" />
          <NavLinkItem
            to="https://reva-csaconnect-admin.vercel.app"
            label="Admin"
            external
          />
          {!user ? (
            <>
              <NavLinkItem to="/login" label="Login" />
              <NavLinkItem to="/register" label="Register" />
            </>
          ) : (
            <>
              <NavLinkItem to="/challenges" label="Challenges" />
              <NavLinkItem to="/dashboard" label="Dashboard" />
              <NavLinkItem to="/feed" label="My Feed" />
              <li className="w-full">
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
