import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 border-t border-gray-800 text-sm">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {/* University Info */}
        <div>
          <h2 className="text-white font-bold text-base mb-3 tracking-wide">
            REVA UNIVERSITY
          </h2>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
            Bengaluru, India
            <br />
            Rukmini Knowledge Park, Kattigenahalli
            <br />
            Yelahanka, Bengaluru - 560 064
            <br />
            Karnataka, India
          </p>
          <p className="mt-3 text-xs sm:text-sm text-gray-400">
            <strong className="text-gray-300">Ph:</strong> +91-90211 90211, +91
            80 4696 6966
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            <strong className="text-gray-300">Email:</strong>{" "}
            <a
              href="mailto:admissions@reva.edu.in"
              className="text-orange-400 hover:underline"
            >
              admissions@reva.edu.in
            </a>
          </p>
        </div>

        {/* Links and Branding */}
        <div className="flex flex-col items-start md:items-start">
          <p className="text-white font-semibold mb-3 tracking-wide">
            Follow us on
          </p>
          <div className="flex gap-4 text-lg text-gray-400 mb-4">
            <a
              href="https://www.instagram.com/revauniversity_official"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/revauniversity_official"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@revauniversity_official"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/reva-university"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/REVAUniversity"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <FaGlobe className="text-gray-500" />
            <a
              href="https://www.reva.edu.in"
              className="text-orange-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.reva.edu.in
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-start md:items-end justify-between text-left md:text-right">
          <div>
            <p className="text-white font-semibold">CSAConnect</p>
            <p className="text-xs text-gray-400 mt-0.5">
              School of Computer Science & Applications
            </p>
          </div>
          <div className="text-xs text-gray-500 mt-6 md:mt-0">
            <p>
              &copy; {new Date().getFullYear()} REVA University. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
