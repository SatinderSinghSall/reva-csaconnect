import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetailsPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchPostDetails();
  }, [postId]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (!post)
    return (
      <div className="text-center mt-10 text-red-500">Post not found.</div>
    );

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Posted by <span className="text-orange-600">{post.author.name}</span> on{" "}
        {new Date(post.createdAt).toLocaleString()}
      </p>

      {post.image && (
        <img
          src={post.image}
          alt="Post"
          className="w-full rounded-lg mb-6 shadow-md object-cover max-h-[400px]"
        />
      )}

      <div className="text-gray-700 whitespace-pre-line leading-relaxed mb-8">
        {post.content}
      </div>

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
            {post.comments.map((comment, idx) => (
              <li key={idx} className="border p-3 rounded-lg bg-gray-50">
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
    </div>
  );
};

export default PostDetailsPage;
