import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const PostCard = ({ post, refreshPosts }) => {
  const { token, user } = useContext(AuthContext);
  const [liked, setLiked] = useState(
    post.likes.some((like) => like === user?.id)
  );
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState("");
  const [loadingComment, setLoadingComment] = useState(false);
  const [loadingLike, setLoadingLike] = useState(false);

  const handleLike = async () => {
    if (!token) return alert("Please login to like posts");
    setLoadingLike(true);
    try {
      await axios.post(
        `https://csaconnect-backend.onrender.com/api/posts/${post._id}/like`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setLiked(!liked);
      setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingLike(false);
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!token) return alert("Please login to comment");
    if (!commentText.trim()) return;

    setLoadingComment(true);
    try {
      const res = await axios.post(
        `https://csaconnect-backend.onrender.com/api/posts/${post._id}/comment`,
        { text: commentText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments(res.data.comments);
      setCommentText("");
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingComment(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
      {/* Wrap main card content in Link */}
      <Link to={`/posts/${post._id}`} className="block group">
        {/* Author & Date */}
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-orange-100 text-orange-600 font-semibold px-3 py-1 rounded-full text-sm whitespace-nowrap">
              {post.author.name}
            </div>
            <div className="text-gray-400 text-sm whitespace-nowrap">
              {new Date(post.createdAt).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 line-clamp-2 group-hover:underline">
          {post.title}
        </h3>

        {/* Content */}
        <p className="mb-5 text-gray-700 whitespace-pre-line leading-relaxed line-clamp-4">
          {post.content}
        </p>
      </Link>

      {/* Like & Comment Counts */}
      <div className="flex items-center gap-6 mb-5 text-gray-600 flex-wrap">
        <button
          onClick={handleLike}
          disabled={loadingLike}
          className={`flex items-center gap-2 text-lg font-semibold transition-colors ${
            liked ? "text-orange-500" : "hover:text-orange-400 text-gray-500"
          } ${loadingLike ? "cursor-wait" : "cursor-pointer"}`}
          aria-label={liked ? "Unlike" : "Like"}
        >
          {loadingLike ? (
            <svg
              className="animate-spin h-6 w-6 text-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
          {!loadingLike && likesCount}
        </button>
        <div className="text-lg font-semibold flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.957 9.957 0 01-4.284-.891L3 20l1.214-3.571A7.956 7.956 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          {comments.length} Comments
        </div>
      </div>

      {/* Comments */}
      <div className="max-h-36 overflow-y-auto border-t border-gray-200 pt-3 mb-5 scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-gray-100">
        {comments.length === 0 && (
          <p className="text-gray-400 italic text-center text-sm">
            No comments yet
          </p>
        )}
        {comments.slice(0, 2).map((comment, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 mb-3 bg-gray-50 hover:bg-orange-50 rounded-lg px-4 py-3 transition"
          >
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-orange-200 text-orange-800 flex items-center justify-center font-bold text-sm">
                {comment.user?.name?.[0]?.toUpperCase() || "U"}
              </div>
            </div>

            {/* Comment Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-gray-800 text-sm">
                  {comment.user?.name || "User"}
                </span>
                <span className="text-xs text-gray-400">
                  {new Date(comment.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-gray-700 text-sm">{comment.text}</p>
            </div>
          </div>
        ))}

        {comments.length > 2 && (
          <Link
            to={`/posts/${post._id}`}
            className="text-sm text-orange-500 hover:underline block mt-2 text-center"
          >
            View all {comments.length} comments
          </Link>
        )}
      </div>

      {/* Add Comment */}
      <form onSubmit={handleAddComment} className="flex gap-3">
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400 transition text-sm"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button
          type="submit"
          disabled={!commentText.trim() || loadingComment}
          className="bg-orange-500 text-white px-5 rounded-full font-semibold hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center gap-2"
        >
          {loadingComment ? (
            <>
              <svg
                className="animate-spin h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Posting...
            </>
          ) : (
            "Post"
          )}
        </button>
      </form>
    </div>
  );
};

export default PostCard;
