"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

interface Post {
  name: string;
  _id?: string;
  email: string;
  message: string;
  subject: string;
  createdAt: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/pages/api");
      setPosts(data.data); // Adjust if your backend structure is different
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Messages</h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No messages found.</p>
      ) : (
        posts.map((post, index) => (
          <div
            key={post._id || index}
            className="border p-4 rounded-lg shadow-sm mb-4 "
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-blue-600">{index + 1}</span>
              <span className="text-sm ">
                {new Date(post.createdAt).toLocaleString()}
              </span>
            </div>
            <p>
              <strong>Name:</strong> {post.name}
            </p>
            <p>
              <strong>Email:</strong> {post.email}
            </p>
            <p>
              <strong>Subject:</strong> {post.subject}
            </p>
            <p>
              <strong>Message:</strong> {post.message}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
