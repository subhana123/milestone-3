"use client";
import React, { useState } from "react";
import Image from "next/image";

const Design = () => {
  // State to store comments
  const [comments, setComments] = useState([
    { name: "kashaf", text: "Amazing insights into design trends! I feel inspired" },
    { name: "Hassan", text: "Love the minimalist designs you mentioned Great article!" },
    { name: "Ibad", text: "Can you cover more on UI/UX for mobile apps?" },
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
    <div className="bg-gradient-to-r from-pink-200 via-blue-200 to-purple-200 min-h-screen py-8 px-4">
      {/* Header */}
      <header className="bg-gray-800 text-white text-center py-4 rounded-md shadow-lg">
        <h1 className="text-3xl font-bold">Design Blog</h1>
        <p className="mt-2 text-blue-100">Explore the art of creativity in design trends</p>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto bg-white mt-8 p-6 rounded-lg shadow-md">
        {/* Blog Post */}
        <article className="flex flex-col md:flex-row items-center md:items-start">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Top Creative Design Trends to Watch in 2024
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The design world is buzzing with innovation blending technology and creativity in new ways From bold 
              colors to futuristic typography these trends are not just reshaping aesthetics but also redefining user experiences
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>1 Vibrant Gradients:</strong> Gradients are no longer just background fillers they are now bold bright 
              and dynamic used in everything from typography to app designs They add depth and intrigue to flat designs
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>2 Minimalist Maximalism:</strong> Designers are focusing on clean clutter-free layouts but adding bold 
              elements like oversized fonts vibrant colors and striking visuals to make a statement
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>3 3D and Immersive Design:</strong> With the rise of AR/VR, 3D designs are becoming more immersive 
              From product displays to entire virtual experiences this trend bridges the gap between the digital and physical worlds
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <Image
              src='/public/images/design.jpeg'
              alt="Design Trends"
              height={500}
              width={500}
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </article>

        {/* Key Takeaways */}
        <section className="bg-gradient-to-r from-blue-100 to-pink-100 p-4 rounded-lg mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Takeaways</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Embrace bold gradients to create dynamic visuals</li>
            <li>Combine minimalism with strong design elements for impact</li>
            <li>Explore 3D and immersive techniques to captivate audiences</li>
            <li>Keep user experience at the forefront of your design process</li>
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
                  index % 2 === 0 ? "bg-gradient-to-r from-blue-300 to-pink-300" : "bg-gradient-to-r from-pink-300 to-blue-300"
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

export default Design;