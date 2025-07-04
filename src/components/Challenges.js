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
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-6 sm:px-10 lg:px-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12">
        🚀 Posted Challenges & Opportunities
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="animate-spin text-blue-600 w-10 h-10" />
        </div>
      ) : challenges.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No challenges available at the moment.
        </p>
      ) : (
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge._id}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold text-blue-700 mb-2 hover:underline cursor-pointer">
                  {challenge.title}
                </h2>

                <p>
                  Posted by an Admin - {""}
                  <span className="inline-block text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {challenge.postedBy?.name || "Unknown"}
                  </span>
                </p>

                <p className="text-xs text-gray-400 mb-4">
                  {new Date(challenge.createdAt).toLocaleString(undefined, {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {challenge.content}
                </p>
              </div>

              <div className="mt-6">
                <a
                  href={challenge.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
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
