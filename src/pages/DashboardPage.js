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
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome back,{" "}
        <span className="text-orange-500">
          {user?.name?.split(" ")[0] || "User"}
        </span>
        !
      </h1>

      {/* Info & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Profile Info */}
        <div className="col-span-1 bg-white shadow-md rounded-2xl p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Your Info
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Name:</span> {user?.name}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Email:</span> {user?.email}
          </p>
        </div>

        {/* Stats */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            icon={<FileTextIcon className="w-6 h-6" />}
            label="Posts"
            value={posts.length}
          />
          <StatCard
            icon={<ThumbsUpIcon className="w-6 h-6" />}
            label="Likes"
            value={totalLikes}
          />
          <StatCard
            icon={<MessageCircleIcon className="w-6 h-6" />}
            label="Comments"
            value={totalComments}
          />
        </div>
      </div>

      {/* User Posts */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Your Posts
        </h2>
        {loading ? (
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="animate-pulse h-24 bg-gray-100 rounded-lg"
              ></div>
            ))}
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-600 p-6 bg-gray-100 rounded-xl">
            <FilePlusIcon className="w-8 h-8 mx-auto text-yellow-500 animate-bounce mb-2" />
            <p>No posts yet. Start creating!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                  {post.content}
                </p>
                <p className="text-xs text-gray-500 mt-3">
                  {post.likes.length} Likes • {post.comments.length} Comments
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow border hover:shadow-md transition">
    <div className="p-2 rounded-full bg-orange-100 text-orange-500">{icon}</div>
    <div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  </div>
);

export default DashboardPage;
