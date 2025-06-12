import React from "react";
import { Mail, Hammer } from "lucide-react";

const DevelopmentNotice = () => {
  return (
    <div className="w-full flex justify-center py-16 px-4 bg-gradient-to-b from-[#fefefe] to-[#f3f4f6]">
      <div className="bg-white rounded-3xl shadow-xl max-w-xl w-full px-8 py-10 text-center border border-gray-100 space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-indigo-100 text-indigo-600 rounded-full p-3 shadow-sm">
            <Hammer size={28} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Under Development
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          <strong>REVA University: CSA Connect</strong> is currently under
          development.
        </p>

        <p className="text-sm text-gray-500">
          If you find any bugs or errors, please reach out to us at:
        </p>

        {/* Email Button */}
        <a
          href="mailto:satindersinghsall111@gmail.com"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2.5 rounded-full shadow font-medium text-sm"
        >
          <Mail size={18} />
          satindersinghsall111@gmail.com
        </a>

        {/* Developer Credit */}
        <div className="pt-4 border-t border-gray-200 text-sm text-gray-400">
          Developer – Satinder Singh Sall
        </div>
      </div>
    </div>
  );
};

export default DevelopmentNotice;
