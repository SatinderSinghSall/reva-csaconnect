import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const CreatePostPage = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.content) {
      return alert("Title and content are required.");
    }

    try {
      setLoading(true);
      await axios.post(
        "https://csaconnect-backend.onrender.com/api/posts",
        { title: form.title, content: form.content },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/feed");
    } catch (err) {
      console.error(err);
      alert("Failed to post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        ✍️ Create New Post
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          className="w-full border px-4 py-2 rounded-md focus:ring-2 focus:ring-orange-400"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="content"
          placeholder="Share your achievement, project or update..."
          className="w-full border px-4 py-2 rounded-md h-40 resize-none focus:ring-2 focus:ring-orange-400"
          value={form.content}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition disabled:opacity-50"
        >
          {loading ? "Posting..." : "Share Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostPage;
