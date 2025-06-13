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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Posted Challenges
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <Loader2 className="animate-spin text-blue-600 w-8 h-8" />
        </div>
      ) : challenges.length === 0 ? (
        <p className="text-center text-gray-500">No challenges found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge._id}
              className="bg-white border border-blue-100 shadow-md rounded-2xl p-5 transition hover:shadow-lg"
            >
              <h2 className="text-xl font-semibold text-blue-700 mb-2">
                {challenge.title}
              </h2>
              <p className="text-gray-700 text-sm mb-3">{challenge.content}</p>
              <a
                href={challenge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-blue-500 text-sm mt-2 break-words hover:underline"
              >
                {challenge.link}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Challenges;
