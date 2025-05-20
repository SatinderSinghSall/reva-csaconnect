import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostCard from "../components/PostCard";

const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await axios.get("https://csaconnect-backend.onrender.com/api/posts");
      setPosts(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading posts...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* Show Your Work Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => navigate("/create-post")}
          className="bg-blue-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition duration-200"
        >
          Show your Work
        </button>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.length === 0 && (
          <div className="text-gray-500 text-center col-span-full">
            No posts available.
          </div>
        )}
        {posts.map((post) => (
          <PostCard key={post._id} post={post} refreshPosts={fetchPosts} />
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
