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
  const [showLikesModal, setShowLikesModal] = useState(false);

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

  if (loading)
    return (
      <div className="text-center mt-20 text-gray-500 text-lg font-medium">
        Loading...
      </div>
    );

  if (!post)
    return (
      <div className="text-center mt-20 text-red-600 text-lg font-semibold">
        Post not found.
      </div>
    );

  const isAuthor = user?.id === post.author._id;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Post Card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Author Info Header */}
        <div className="flex items-center gap-4 px-6 py-5 border-b border-gray-100">
          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">
              {post.author.name}
            </div>
            <div className="text-xs text-gray-500">
              {new Date(post.createdAt).toLocaleString()}
            </div>
          </div>
          {isAuthor && (
            <div className="ml-auto flex items-center gap-2">
              <button
                onClick={() => {
                  setIsEditing(true);
                  setEditedTitle(post.title);
                  setEditedContent(post.content);
                }}
                className="text-sm text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Post Body */}
        <div className="px-6 py-6">
          {isEditing ? (
            <>
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="w-full text-2xl font-bold mb-4 border-b border-gray-300 focus:outline-none focus:border-orange-500"
                placeholder="Edit title..."
              />
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="w-full h-40 p-3 border border-gray-300 rounded-md resize-y focus:outline-none focus:border-orange-500"
                placeholder="Edit content..."
              />
              <div className="flex gap-3 mt-4">
                <button
                  onClick={handleEdit}
                  disabled={isSaving}
                  className={`bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 ${
                    isSaving && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  {isSaving ? "Saving..." : "Save"}
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">
                {post.title}
              </h1>
              <p className="text-gray-800 whitespace-pre-line">
                {post.content}
              </p>
            </>
          )}
        </div>

        {/* Post Footer */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-start gap-3 text-sm text-gray-600">
            <button
              onClick={() => setShowLikesModal(true)}
              className="flex items-center gap-1 bg-gray-100  hover:bg-gray-200 px-3 py-1 rounded-full transition"
            >
              <span className="text-xl">👍</span>
              <span className="font-medium text-gray-700">
                {post.likes.length > 0 ? (
                  <>
                    {post.likes.length === 1
                      ? `${post.likes[0].name}`
                      : `${post.likes[0].name} and ${
                          post.likes.length - 1
                        } others`}
                  </>
                ) : (
                  "Like"
                )}
              </span>
            </button>

            {/* User Liked Avatars */}
            {post.likes.length > 0 && (
              <div className="flex -space-x-2">
                {post.likes.slice(0, 3).map((user) => (
                  <div
                    key={user._id}
                    className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center text-xs font-semibold ring-2 ring-white shadow-sm"
                    title={user.name}
                  >
                    {user.name.charAt(0)}
                  </div>
                ))}
                {post.likes.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center text-xs font-medium ring-2 ring-white shadow-sm">
                    +{post.likes.length - 3}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white mt-8 rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Comments ({post.comments.length})
        </h2>
        {post.comments.length === 0 ? (
          <p className="text-gray-500 italic">No comments yet.</p>
        ) : (
          <ul className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {post.comments.map((comment) => (
              <li key={comment._id} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold">
                  {comment.user.name.charAt(0)}
                </div>
                <div className="bg-gray-100 rounded-xl p-4 w-full">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-semibold text-gray-900 text-sm">
                      {comment.user.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-800">{comment.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-xl animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Confirm Delete
            </h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this post? This action cannot be
              undone.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-5 py-2 bg-gray-200 rounded hover:bg-gray-300 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className={`px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 ${
                  isDeleting && "opacity-50 cursor-not-allowed"
                }`}
              >
                {isDeleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Likes Modal */}
      {/* Likes Modal */}
      {showLikesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-fadeIn">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">Liked by</h3>
              <button
                onClick={() => setShowLikesModal(false)}
                className="text-gray-500 hover:text-gray-700 transition"
              >
                ✕
              </button>
            </div>

            {post.likes.length === 0 ? (
              <p className="text-center text-gray-500 italic">No likes yet.</p>
            ) : (
              <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
                {post.likes.map((user) => (
                  <li
                    key={user._id}
                    className="flex items-center gap-3 py-3 px-1"
                  >
                    <div className="w-10 h-10 rounded-full bg-orange-400 text-white flex items-center justify-center font-semibold text-sm shadow">
                      {user.name.charAt(0)}
                    </div>
                    <div className="text-sm text-gray-800 font-medium">
                      {user.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <button
              onClick={() => setShowLikesModal(false)}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-medium transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetailsPage;
