import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { AuthContext } from "../context/AuthContext";

const CreatePostPage = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    content: "",
    skills: "",
    link: "",
  });
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.content) {
      return toast.error("Title and content are required.");
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("content", form.content);
      formData.append("skills", form.skills);
      formData.append("link", form.link);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      await axios.post(
        "https://csaconnect-backend.onrender.com/api/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Post added successfully!");
      navigate("/feed");
    } catch (err) {
      console.error("Error posting:", err);
      alert("Failed to post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 mb-12 px-4">
      <div className="bg-white border-2 border-solid rounded-2xl shadow-lg p-8 sm:p-10">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          ✍️ Create a New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Post Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Give your post a great title..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Post Content
            </label>
            <textarea
              id="content"
              name="content"
              value={form.content}
              onChange={handleChange}
              placeholder="Share what you’ve built, learned, or accomplished..."
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm h-40 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Skills Learned (Optional)
            </label>
            <input
              id="skills"
              type="text"
              name="skills"
              value={form.skills}
              onChange={handleChange}
              placeholder="e.g., React, Node.js, MongoDB"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Project Link or Reference (Optional)
            </label>
            <input
              id="link"
              type="url"
              name="link"
              value={form.link}
              onChange={handleChange}
              placeholder="https://yourproject.com"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition"
            />
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload Image (Optional)
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition bg-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold py-3 rounded-lg shadow-md transition disabled:opacity-50"
          >
            {loading ? "Posting..." : "🚀 Share Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
