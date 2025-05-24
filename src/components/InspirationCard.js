import React from "react";
import { Mail } from "lucide-react";

const InspirationCard = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        🌟 Vision Behind <span className="text-indigo-600">CSAConnect</span>
      </h2>

      <div className="bg-white rounded-3xl shadow-md border border-gray-100 transition hover:shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left: Image */}
          <div className="md:w-1/3">
            <img
              src="/images/prof_sneha.jpeg"
              alt="Prof. Sneha N"
              className="w-full h-auto object-cover object-center md:rounded-l-3xl"
            />
          </div>

          {/* Right: Content */}
          <div className="md:w-2/3 p-6 sm:p-10 flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Prof. Sneha N
              </h3>
              <p className="text-sm text-gray-500">Assistant Professor</p>
              <p className="text-sm text-gray-500">
                School of Computer Science and Applications,
                <br />
                REVA University, Bengaluru
              </p>
            </div>

            <div className="flex items-center text-indigo-600 text-sm">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:sneha.n@reva.edu.in" className="hover:underline">
                sneha.n@reva.edu.in
              </a>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              <strong>CSAConnect</strong> was envisioned by Prof. Sneha N to
              create a vibrant digital space for students and faculty of the
              School of CSA to collaborate, showcase innovation, and build an
              academic network. Her leadership laid the foundation of a platform
              that celebrates student achievements, nurtures community, and
              inspires engagement through modern technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationCard;
