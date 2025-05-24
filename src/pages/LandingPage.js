import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import InspirationCard from "../components/InspirationCard";

const features = [
  {
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Showcase Work",
    description:
      "Display your projects, achievements, and certificates to the CSA community.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a8.38 8.38 0 0113 0" />
      </svg>
    ),
    title: "Connect & Collaborate",
    description:
      "Engage with peers, faculty, and recruiters to build your network.",
  },
  {
    icon: (
      <svg
        className="w-10 h-10 text-orange-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M9 17v-6a3 3 0 016 0v6" />
        <path d="M5 21h14" />
      </svg>
    ),
    title: "Stay Updated",
    description:
      "Receive notifications about events, workshops, and hackathons.",
  },
];

const steps = [
  {
    icon: "📝",
    title: "Create Profile",
    description:
      "Set up your personalized profile showcasing your skills and experience.",
  },
  {
    icon: "🚀",
    title: "Post & Share",
    description: "Share projects, achievements, and connect with peers.",
  },
  {
    icon: "🤝",
    title: "Collaborate",
    description:
      "Find collaborators and get involved in CSA community projects.",
  },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-orange-50 px-6 py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Abstract background shapes */}
      <div className="pointer-events-none absolute top-[-100px] left-[-100px] w-96 h-96 bg-orange-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="pointer-events-none absolute bottom-[-80px] right-[-80px] w-72 h-72 bg-orange-300 rounded-full opacity-20 blur-2xl"></div>

      {/* Hero */}
      <section className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight"
        >
          🎓 Welcome to{" "}
          <span className="text-orange-500 underline decoration-wavy decoration-4 underline-offset-8">
            CSAConnect
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Showcase your achievements, connect with peers, and build your future
          at REVA University’s School of CSA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="inline-flex gap-6"
        >
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-700"
          >
            Register
          </button>
        </motion.div>
      </section>

      <InspirationCard />

      {/* How It Works */}
      <section className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          How it Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {steps.map(({ icon, title, description }, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-md"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left relative z-10">
        {features.map(({ icon, title, description }, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-start gap-4"
          >
            <div className="p-4 bg-orange-100 rounded-full">{icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </motion.article>
        ))}
      </section>

      {/* Footer / Call to Action */}
      <section className="mt-24 max-w-4xl mx-auto text-center relative z-10">
        <p className="text-gray-700 text-lg mb-6">
          Ready to join the community and take your CSA journey to the next
          level?
        </p>
        <button
          onClick={() => navigate("/login")}
          className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-full font-bold shadow-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
        >
          Get Started Now
        </button>
      </section>
    </main>
  );
};

export default LandingPage;
