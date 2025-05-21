import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

import { AuthContext } from "../context/AuthContext";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { token, user } = useContext(AuthContext);

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchPostDetails = async () => {
    try {
      const res = await axios.get(
        `https://csaconnect-backend.onrender.com/api/posts/${postId}`
      );
      setPost(res.data);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await axios.delete(
        `https://csaconnect-backend.onrender.com/api/posts/${postId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Post successfully deleted!");
      navigate("/feed");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete post.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = async () => {
    setIsSaving(true);
    try {
      const res = await axios.put(
        `https://csaconnect-backend.onrender.com/api/posts/${postId}`,
        { title: editedTitle, content: editedContent },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setPost(res.data);
      toast.success("Post Edited!");
      setIsEditing(false);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update post.");
    } finally {
      setIsSaving(false);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, [postId]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!post)
    return (
      <div className="text-center mt-10 text-red-500">Post not found.</div>
    );

  const isAuthor = user?.id === post.author._id;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="text-3xl font-bold w-full text-gray-800 mb-4 border-b"
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full h-40 border p-3 mb-6 rounded-md"
          />
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleEdit}
              disabled={isSaving}
              className={`bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 ${
                isSaving ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSaving ? "Saving..." : "Save"}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Posted by{" "}
            <span className="text-orange-600">{post.author.name}</span> on{" "}
            {new Date(post.createdAt).toLocaleString()}
          </p>

          <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-8">
            {post.content}
          </div>

          {isAuthor && (
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setEditedTitle(post.title);
                  setEditedContent(post.content);
                }}
                className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                disabled={isDeleting}
                className={`bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 ${
                  isDeleting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          )}
        </>
      )}

      <div className="text-gray-600 mb-6">
        <strong>{post.likes.length}</strong> Likes |{" "}
        <strong>{post.comments.length}</strong> Comments
      </div>

      {post.likes.length > 0 && (
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Liked by:
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            {post.likes.map((user) => (
              <li key={user._id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}

      {post.comments.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Comments:
          </h2>
          <ul className="space-y-4">
            {post.comments.map((comment) => (
              <li
                key={comment._id}
                className="border p-3 rounded-lg bg-gray-50"
              >
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold text-orange-600">
                    {comment.user.name}
                  </span>{" "}
                  commented:
                </p>
                <p className="text-gray-800">{comment.text}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-lg max-w-sm w-full p-6 text-center animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Delete Post?
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this post? This action cannot be
              undone.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`px-5 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition ${
                  isDeleting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetailsPage;
