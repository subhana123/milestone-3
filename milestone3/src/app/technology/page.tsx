'use client'
import React, { useState } from "react";
import Image from "next/image";

const Technology = () => {
  // State to store comments
  const [comments, setComments] = useState([
    { name: "Rohaan", text: "This is amazing! I cant wait to try out some of these gadgets" },
    { name: "Rameez", text: "I love smart home devices The AI-powered assistant sounds great!" },
    { name: "Subhana", text: "Great article! Would love to see more recommendations" },
  ]);

  // State for new comment input
  const [newComment, setNewComment] = useState("");

  // Handle form submission
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { name: "User", text: newComment.trim() }]); // Add new comment to state
      setNewComment(""); // Clear input
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 min-h-screen py-8 px-4">
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-4 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">Technology Blog</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto bg-white mt-8 p-6 rounded-lg shadow-md">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Top 5 Gadgets That Will Revolutionize Your Life in 2024
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Technology is evolving rapidly bringing innovative gadgets that make our lives easier and more exciting
              From smart home devices to the latest wearable tech these advancements are worth exploring
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              Key Gadgets to Watch:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Smart Home Assistants:</strong> AI-powered devices like Google Nest or Alexa that can control your home seamlessly</li>
              <li><strong>Wearable Health Tech:</strong> Fitness bands and smartwatches with advanced health monitoring features</li>
              <li><strong>Next-Gen Smartphones:</strong> Foldable phones and devices with under-display cameras</li>
              <li><strong>AR/VR Headsets:</strong> Immersive experiences for gaming and work with augmented and virtual reality</li>
              <li><strong>Eco-Friendly Gadgets:</strong> Solar-powered devices to promote sustainability</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Whether its a voice-controlled smart speaker or an AI-powered home assistant these gadgets are designed
              to enhance productivity and simplify your daily routine
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <Image
              src="/public/images/tech.webp"
              alt="Tech Gadgets"
              width={500}
              height={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </article>

        {/* Comments Section */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Comments</h3>

          {/* Existing Comments */}
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg shadow-sm ${
                  index % 2 === 0 ? "bg-gradient-to-r from-pink-300 to-blue-300" : "bg-gradient-to-r from-blue-300 to-pink-300"
                }`}
              >
                <p>
                  <strong>{comment.name}:</strong> {comment.text}
                </p>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form className="mt-6 space-y-4" onSubmit={handleAddComment}>
            <textarea
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Technology;