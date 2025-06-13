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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        🚀 Posted Challenges / Opportunities
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="animate-spin text-blue-600 w-8 h-8" />
        </div>
      ) : challenges.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No challenges found.
        </p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge._id}
              className="bg-white rounded-3xl border border-gray-200 shadow-md p-6 transition-all hover:shadow-lg hover:-translate-y-1 duration-200"
            >
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">
                {challenge.title}
              </h2>

              <p className="text-sm text-gray-500 mb-1">
                Posted by:{" "}
                <span className="font-medium text-gray-700">
                  {challenge.postedBy?.name || "Unknown"}
                </span>
              </p>

              <p className="text-gray-700 text-sm mt-2 line-clamp-4">
                {challenge.content}
              </p>

              <a
                href={challenge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 mt-4 text-sm font-medium hover:underline"
              >
                Visit Link <ExternalLink size={16} />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Challenges;
