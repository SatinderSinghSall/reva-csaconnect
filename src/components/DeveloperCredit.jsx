import React from "react";
import { Sparkles } from "lucide-react";

const DeveloperCredit = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white via-[#f9f9f9] to-white py-10 px-4 border-t border-gray-200">
      <div className="flex flex-col items-center justify-center text-center">
        <Sparkles className="w-6 h-6 text-pink-600 animate-bounce mb-3" />
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-md">
          Crafted with{" "}
          <span className="text-pink-600 font-medium">passion</span> and{" "}
          <span className="text-blue-600 font-medium">precision</span> by{" "}
          <a
            href=""
            target="_blank"
            className="text-blue-700 font-semibold hover:text-blue-900 transition duration-200"
          >
            Satinder Singh Sall
          </a>
        </p>
      </div>
    </div>
  );
};

export default DeveloperCredit;
