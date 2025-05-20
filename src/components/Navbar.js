import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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
            <Link to="/" className="hover:text-orange-400 transition">
              Home
            </Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link to="/login" className="hover:text-orange-400 transition">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-orange-400 transition"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-orange-400 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/feed" className="hover:text-orange-400 transition">
                  My Feed
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false); // close mobile menu on logout
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
            <Link
              to="/"
              className="hover:text-orange-400 transition"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="hover:text-orange-400 transition"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-orange-400 transition"
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
                  to="/dashboard"
                  className="hover:text-orange-400 transition"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/feed"
                  className="hover:text-orange-400 transition"
                  onClick={toggleMenu}
                >
                  My Feed
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    toggleMenu(); // close menu after logout
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
