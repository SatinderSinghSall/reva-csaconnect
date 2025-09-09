import React from "react";

const people = [
  {
    name: "Dr. Lokesh C. K.",
    designation: "Director of the School of CSA",
    email: "lokesh.ck@reva.edu.in",
    image: "/images/prof_lokesh.jpeg",
  },
  {
    type: "hods",
    names: ["Prof. B. Manjunath", "Dr. Ambili P S", "Dr. G. Sasikala"],
  },
  {
    name: "Dr. Sneha N",
    designation: "Assistant Professor in the School of CSA",
    email: "sneha.n@reva.edu.in",
    image: "/images/prof_sneha.jpeg",
    note: "CSA Club Coordinator",
  },
  {
    name: "Satinder Singh Sall",
    designation: "Student in the School of CSA",
    email: "satindersinghsall111@gmail.com",
    image: "/images/satinder_image.jpg",
    note: "He developed the CSAConnect web app.",
    portfolio: "https://satinder-portfolio.vercel.app/",
  },
];

export default function Peoples() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-white">
      <h1 className="text-5xl font-extrabold text-center mb-14 text-gray-800">
        <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
          Our People
        </span>
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {people.map((person, index) =>
          person.type === "hods" ? (
            <div
              key={`hods-${index}`}
              className="backdrop-blur-md bg-white/80 rounded-3xl shadow-lg hover:shadow-xl p-8 transition-transform transform hover:-translate-y-3 flex flex-col items-center text-center border border-orange-100"
            >
              <h2 className="text-3xl font-bold text-orange-600 mb-6">HODs</h2>
              <div className="flex flex-col gap-3 w-full items-start">
                {person.names.map((name, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2 bg-gradient-to-r from-orange-200 to-orange-300 text-orange-900 font-semibold text-lg rounded-full shadow-sm hover:from-orange-300 hover:to-orange-400 transition"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="backdrop-blur-md bg-white/80 rounded-3xl shadow-lg hover:shadow-xl p-8 transition-transform transform hover:-translate-y-3 flex flex-col items-center text-center border border-orange-100"
            >
              <div className="relative w-44 h-44 mb-5">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-44 h-44 object-cover rounded-full border-4 border-white shadow-md transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full border-4 border-transparent hover:border-orange-400 transition-all duration-300"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800">
                {person.name}
              </h2>
              <p className="text-sm text-gray-600 mt-1">{person.designation}</p>

              <div className="flex flex-col items-center mt-4 gap-2">
                <a
                  href={`mailto:${person.email}`}
                  className="text-blue-600 text-sm hover:underline"
                >
                  {person.email}
                </a>

                {person.portfolio && (
                  <a
                    href={person.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg hover:from-pink-500 hover:to-orange-400 transition"
                  >
                    My Portfolio
                  </a>
                )}
              </div>

              {person.note && (
                <p className="text-xs text-gray-500 mt-4 italic">
                  {person.note}
                </p>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
}
