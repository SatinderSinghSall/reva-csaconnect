import React, { useEffect, useState } from "react";
import axios from "axios";
import { ExternalLink, Loader2 } from "lucide-react";

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const res = await axios.get(
          "https://csaconnect-backend.onrender.com/api/challenges"
        );
        setChallenges(res.data);
      } catch (err) {
        console.error("Failed to fetch challenges", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10 px-4 sm:px-6 lg:px-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 text-center">
        🚀 Posted Challenges & Opportunities
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="animate-spin text-blue-600 w-8 h-8" />
        </div>
      ) : challenges.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No challenges available at the moment.
        </p>
      ) : (
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge._id}
              className="bg-white rounded-3xl border border-gray-300 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold text-blue-700 mb-3 leading-tight">
                  {challenge.title}
                </h2>

                <p className="text-sm text-gray-500 mb-2">
                  Posted by:{" "}
                  <span className="font-medium text-gray-800">
                    {challenge.postedBy?.name || "Unknown"}
                  </span>
                </p>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                  {challenge.content}
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={challenge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                >
                  Visit Link <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Challenges;
