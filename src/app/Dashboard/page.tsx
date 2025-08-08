"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Mail, MessagesSquare } from "lucide-react";
import { motion } from "framer-motion";

interface Post {
  name: string;
  _id?: string;
  email: string;
  message: string;
  subject: string;
  createdAt: string;
}

export default function Messages() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/pages/api");
      // Sort posts by createdAt in descending order (newest first)
      const sortedPosts = data.data.sort(
        (a: Post, b: Post) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setPosts(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section
      className="py-16 md:py-20 bg-base-100 relative overflow-hidden"
      role="region"
      aria-label="Messages section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 border border-primary/20">
            <MessagesSquare
              className="h-6 w-6 text-primary"
              aria-label="Messages icon"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Messages
            </span>
          </h1>
          <p className="text-lg text-base-content/70">
            View recent contact form submissions
          </p>
        </motion.div>

        {loading ? (
          <div
            className="flex flex-col justify-center items-center min-h-screen"
            aria-live="polite"
            aria-label="Loading messages"
          >
            <span className="loading loading-dots loading-lg text-primary"></span>
            <p className="mt-4 text-lg text-base-content/70">
              Loading messages...
            </p>
          </div>
        ) : posts.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-12"
            aria-live="polite"
          >
            <Mail
              className="mb-4 h-16 w-16 text-base-content/50"
              aria-label="No messages icon"
            />
            <p className="text-lg text-base-content/70">No messages found.</p>
            <p className="text-sm text-base-content/60">
              Your inbox is sparkling clean!
            </p>
          </div>
        ) : (
          <ul className="space-y-6">
            {posts.map((post, index) => (
              <motion.li
                key={post._id || index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                role="listitem"
                className="card bg-base-100/95 border border-base-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
                aria-labelledby={`post-${index}-title`}
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-row items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 group-hover:bg-accent/10 transition-all duration-300">
                        <Mail
                          className="h-5 w-5 text-primary group-hover:text-accent group-hover:scale-110 transition-transform duration-300"
                          aria-label="Message icon"
                        />
                      </div>
                      <h2
                        id={`post-${index}-title`}
                        className="text-lg font-semibold text-base-content group-hover:text-primary"
                      >
                        Message from {post.name}
                      </h2>
                    </div>
                    <span className="text-sm text-base-content/60">
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="space-y-3 text-base-content/70">
                    <p>
                      <strong className="font-medium text-base-content">
                        Email:
                      </strong>{" "}
                      {post.email}
                    </p>
                    <p>
                      <strong className="font-medium text-base-content">
                        Subject:
                      </strong>{" "}
                      {post.subject}
                    </p>
                    <p className="leading-relaxed">
                      <strong className="font-medium text-base-content">
                        Message:
                      </strong>{" "}
                      {post.message}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
