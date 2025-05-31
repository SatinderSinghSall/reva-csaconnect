import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = (path) =>
    `transition ${
      location.pathname === path
        ? "text-orange-400 font-semibold"
        : "hover:text-orange-400"
    }`;

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">REVA University: CSAConnect</div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link to="/" className={linkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://reva-csaconnect-admin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
            >
              Admin
            </a>
          </li>
          {!user ? (
            <>
              <li>
                <Link to="/login" className={linkClass("/login")}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className={linkClass("/register")}>
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/quiz" className={linkClass("/quiz")}>
                  Quiz
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className={linkClass("/dashboard")}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/feed" className={linkClass("/feed")}>
                  My Feed
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="hover:text-red-400 transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="mt-4 flex flex-col gap-4 md:hidden">
          <li>
            <Link to="/" className={linkClass("/")} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://reva-csaconnect-admin.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition"
              onClick={toggleMenu}
            >
              Admin
            </a>
          </li>
          {!user ? (
            <>
              <li>
                <Link
                  to="/login"
                  className={linkClass("/login")}
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={linkClass("/register")}
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/quiz"
                  className={linkClass("/quiz")}
                  onClick={toggleMenu}
                >
                  Quiz
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className={linkClass("/dashboard")}
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/feed"
                  className={linkClass("/feed")}
                  onClick={toggleMenu}
                >
                  My Feed
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu();
                  }}
                  className="hover:text-red-400 transition"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
