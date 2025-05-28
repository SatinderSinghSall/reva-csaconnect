import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";
import {
  FilePlusIcon,
  FileTextIcon,
  MessageCircleIcon,
  ThumbsUpIcon,
} from "lucide-react";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const res = await API.get("/posts/my-posts");
        setPosts(res.data);
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, []);

  const totalLikes = posts.reduce((sum, post) => sum + post.likes.length, 0);
  const totalComments = posts.reduce(
    (sum, post) => sum + post.comments.length,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Welcome back, {user?.name?.split(" ")[0] || "User"}!
      </h1>

      {/* User Info */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Your Info
          </h2>
          <p>
            <span className="font-medium text-gray-700">Name:</span>{" "}
            {user?.name}
          </p>
          <p>
            <span className="font-medium text-gray-700">Email:</span>{" "}
            {user?.email}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <StatCard
            icon={<FileTextIcon />}
            label="Posts"
            value={posts.length}
          />
          <StatCard
            icon={<ThumbsUpIcon />}
            label="Total Likes"
            value={totalLikes}
          />
          <StatCard
            icon={<MessageCircleIcon />}
            label="Total Comments"
            value={totalComments}
          />
        </div>
      </div>

      {/* Posts List */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Your Posts
        </h2>
        {loading ? (
          <p className="text-gray-600">Loading your posts...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-600 p-6 bg-gray-100 rounded-xl">
            <FilePlusIcon className="w-8 h-8 mx-auto text-yellow-500 animate-bounce mb-2" />
            <p>No posts yet. Start creating!</p>
          </div>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li
                key={post._id}
                className="p-4 bg-white shadow rounded-lg border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {post.content}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {post.likes.length} Likes • {post.comments.length} Comments
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border">
    <div className="text-orange-500">{icon}</div>
    <div className="text-xl font-bold text-gray-800 mt-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default DashboardPage;
