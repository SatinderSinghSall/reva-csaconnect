import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import API from "../api/axios";
import {
  FilePlusIcon,
  FileTextIcon,
  MessageCircleIcon,
  ThumbsUpIcon,
  PlusCircleIcon,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

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

  const chartData = posts.map((post) => ({
    name: post.title.length > 10 ? post.title.slice(0, 10) + "..." : post.title,
    Likes: post.likes.length,
    Comments: post.comments.length,
  }));

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back,{" "}
          <span className="text-orange-500">
            {user?.name?.split(" ")[0] || "User"}
          </span>
          !
        </h1>
        {/* Desktop-only button */}
        <button
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-full shadow transition"
          onClick={() => navigate("/create-post")}
        >
          <PlusCircleIcon className="w-5 h-5" />
          Create Post
        </button>
      </div>

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

      {/* Chart */}
      <div className="bg-white rounded-2xl shadow p-6 mb-10 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Post Engagement Overview
        </h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="Likes" fill="#f97316" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Comments" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-500 text-sm">No posts to display.</p>
        )}
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
      {/* Mobile Sticky Button */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50">
        <button
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full shadow-lg transition"
          onClick={() => navigate("/create-post")}
        >
          <PlusCircleIcon className="w-5 h-5" />
          Create Post
        </button>
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
