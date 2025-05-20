import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-9">
      <div className="max-w-6xl mx-auto px-4 grid gap-8 md:grid-cols-3 text-sm">
        {/* University Info */}
        <div>
          <h2 className="text-lg font-bold mb-2">REVA UNIVERSITY</h2>
          <p>Bengaluru, India</p>
          <p>Rukmini Knowledge Park, Kattigenahalli</p>
          <p>Yelahanka, Bengaluru - 560 064</p>
          <p>Karnataka, India</p>
          <p className="mt-2">
            <strong>Ph:</strong> +91-90211 90211, +91 80 4696 6966
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:admissions@reva.edu.in" className="underline">
              admissions@reva.edu.in
            </a>
          </p>
        </div>

        {/* Links and Branding */}
        <div className="flex flex-col items-center md:items-start">
          <p className="text-lg font-semibold mb-2 text-orange-400">
            Follow us on
          </p>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.instagram.com/revauniversity_official"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/revauniversity_official"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.youtube.com/@revauniversity_official"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/company/reva-university"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com/REVAUniversity"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <FaGlobe />
            <a
              href="https://www.reva.edu.in"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.reva.edu.in
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} REVA University</p>
          <p>CSAConnect</p>
          <div className="flex justify-center md:justify-end gap-2 mt-2">
            <FaPhoneAlt />
            <span>+91 90211 90211</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
