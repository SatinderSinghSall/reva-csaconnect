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
  XIcon,
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
import { Dialog } from "@headlessui/react";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const StatCard = ({ icon, label, value, loading }) => (
    <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow border hover:shadow-md transition">
      <div className="p-2 rounded-full bg-orange-100 text-orange-500">
        {icon}
      </div>
      <div>
        {loading ? (
          <div className="space-y-1">
            <div className="h-6 w-16 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-24 bg-gray-100 rounded animate-pulse" />
          </div>
        ) : (
          <>
            <div className="text-xl font-bold text-gray-900">{value}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </>
        )}
      </div>
    </div>
  );

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
        <button
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-full shadow transition"
          onClick={() => navigate("/create-post")}
        >
          <PlusCircleIcon className="w-5 h-5" />
          Create Post
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
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

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard
            icon={<FileTextIcon className="w-6 h-6" />}
            label="Posts"
            value={posts.length}
            loading={loading}
          />
          <StatCard
            icon={<ThumbsUpIcon className="w-6 h-6" />}
            label="Likes"
            value={totalLikes}
            loading={loading}
          />
          <StatCard
            icon={<MessageCircleIcon className="w-6 h-6" />}
            label="Comments"
            value={totalComments}
            loading={loading}
          />
        </div>
      </div>

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
                className="bg-white border border-gray-400 p-5 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
                onClick={() => handlePostClick(post)}
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

      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50">
        <button
          className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-full shadow-lg transition"
          onClick={() => navigate("/create-post")}
        >
          <PlusCircleIcon className="w-5 h-5" />
          Create Post
        </button>
      </div>

      {/* Post Detail Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        className="relative z-50"
      >
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
        />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <Dialog.Title className="text-2xl font-bold text-gray-900">
                {selectedPost?.title}
              </Dialog.Title>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {selectedPost && (
              <div className="space-y-6 text-sm text-gray-800 max-h-[70vh] overflow-y-auto pr-2">
                <div>
                  <p className="text-base whitespace-pre-wrap">
                    {selectedPost.content}
                  </p>
                </div>

                {selectedPost.skills?.length > 0 && (
                  <div>
                    <span className="font-medium text-gray-700">Skills:</span>{" "}
                    <span className="text-gray-600">
                      {selectedPost.skills.join(", ")}
                    </span>
                  </div>
                )}

                {selectedPost.link && (
                  <div>
                    <span className="font-medium text-gray-700">Link:</span>{" "}
                    <a
                      href={selectedPost.link}
                      className="text-blue-600 underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedPost.link}
                    </a>
                  </div>
                )}

                {selectedPost.image && (
                  <div>
                    <img
                      src={selectedPost.image}
                      alt="Post"
                      className="rounded-xl w-full max-h-64 object-cover border"
                    />
                  </div>
                )}

                <div className="flex gap-6 text-sm text-gray-500">
                  <span>👍 {selectedPost.likes.length} Likes</span>
                  <span>💬 {selectedPost.comments.length} Comments</span>
                </div>

                {/* Comments Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Comments
                  </h3>
                  <ul className="space-y-4">
                    {selectedPost.comments.map((c, i) => (
                      <li key={i} className="bg-gray-100 rounded-xl p-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-gray-900">
                            {c.name || "Anonymous"}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(c.createdAt).toLocaleString("en-US", {
                              dateStyle: "medium",
                              timeStyle: "short",
                            })}
                          </span>
                        </div>
                        <p className="text-gray-700">{c.text}</p>
                      </li>
                    ))}
                    {selectedPost.comments.length === 0 && (
                      <p className="text-sm text-gray-500 italic">
                        No comments yet.
                      </p>
                    )}
                  </ul>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default DashboardPage;
