import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PlusIcon, UserCircle } from "lucide-react";

import PostCard from "../components/PostCard";
import { AuthContext } from "../context/AuthContext";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await axios.get(
        "https://csaconnect-backend.onrender.com/api/posts"
      );
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //! Filter posts based on search query (case-insensitive)
  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Community Feed
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Discover and share what everyone’s working on.
          </p>
        </div>
        <div className="flex items-center gap-2 text-gray-700 text-sm sm:text-base">
          <UserCircle className="w-6 h-6 text-blue-600" />
          Welcome,{" "}
          <span className="font-semibold">
            {user?.name?.split(" ")[0] || "User"}
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:max-w-md px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="text-center text-gray-500 py-20 text-base sm:text-lg animate-pulse">
          Loading posts...
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="text-center text-gray-400 text-lg mt-20">
          No matching posts found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {filteredPosts.map((post) => (
            <PostCard key={post._id} post={post} refreshPosts={fetchPosts} />
          ))}
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => navigate("/create-post")}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-full shadow-xl transition-all duration-200"
      >
        <PlusIcon className="w-5 h-5" />
        <span className="hidden sm:inline text-sm">Show your Work</span>
      </button>
    </div>
  );
};

export default FeedPage;
