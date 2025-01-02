"use client";
import React, { useState } from "react";
import Image from "next/image";

const Lifestyle = () => {
  // State to store comments
  const [comments, setComments] = useState([
    { name: "Hina", text: "Great tips for staying active and motivated!" },
    { name: "Kamran", text: "I love the self-care routines. Very helpful!" },
    { name: "Alina", text: "Can you include more tips on work-life balance?" },
  ]);

  // State for new comment input
  const [newComment, setNewComment] = useState("");

  // Handle form submission
  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, { name: "User", text: newComment.trim() }]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-pink-200 via-white to-blue-200 min-h-screen py-8 px-4">
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-4 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">Lifestyle Blog</h1>
        <p className="mt-2 text-blue-100">Discover tips to live a healthier happier life</p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto bg-white mt-8 p-6 rounded-lg shadow-md">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Top Lifestyle Tips to Elevate Your Daily Routine
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Achieving a balanced lifestyle is all about cultivating habits that enhance your mental and physical well-being
              Whether its adopting a fitness regime or focusing on mindfulness these tips can help you thrive
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>1 Morning Routines:</strong> Start your day with meditation or light stretching to set a positive tone 
              for the rest of the day
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>2 Healthy Eating:</strong> Incorporate more whole foods fruits and vegetables into your meals A balanced diet 
              fuels your body and mind
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>3 Digital Detox:</strong> Allocate time away from screens to reduce stress and reconnect with the present moment
              Engage in hobbies that dont involve technology
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <Image
              src="/public/images/life.webp"
              alt="Lifestyle Tips"
              height={500}
              width={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </article>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-pink-100 to-blue-100 p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Key Takeaways</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Start your day with positive routines to boost energy and mood</li>
            <li>Focus on a balanced diet to improve overall health</li>
            <li>Take breaks from digital devices for mental clarity</li>
            <li>Incorporate self-care activities into your daily schedule</li>
          </ul>
        </section>

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
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="Write your comment here..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Submit Comment
            </button>
          </form>
        </section>
      </main>

    
    </div>
  );
};

export default Lifestyle;