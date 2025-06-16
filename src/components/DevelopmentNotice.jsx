import React from "react";
import { Mail, Hammer } from "lucide-react";

const DevelopmentNotice = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-white via-indigo-50 to-white">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl max-w-lg w-full px-10 py-14 text-center space-y-6 transition-all duration-300">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-4 rounded-full bg-indigo-100 text-indigo-700 shadow-md hover:scale-105 transform transition">
            <Hammer size={32} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">Under Development</h1>

        {/* Subheading */}
        <p className="text-base text-gray-700">
          <strong>REVA University: CSA Connect</strong> is currently in
          development.
        </p>
        <p className="text-sm text-gray-600">
          This website is in trial mode. Please share feedback or report issues.
        </p>

        {/* Contact */}
        <p className="text-sm text-gray-500">
          For bugs or feedback, contact us:
        </p>
        <a
          href="mailto:csaconnect@gmail.com"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-shadow shadow-md"
        >
          <Mail size={18} />
          csaconnect@gmail.com
        </a>

        {/* Footer */}
        <div className="pt-5 border-t border-gray-200 text-xs text-gray-400">
          Developer – Satinder Singh Sall
        </div>
      </div>
    </div>
  );
};

export default DevelopmentNotice;
