'use client'
import { useState } from 'react';

interface PostProps {
  title: string;
  date: string;
  excerpt: string;
  postId: string;
}

const Post: React.FC<PostProps> = ({ title, date, excerpt, postId }) => {
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment = (e.target as HTMLFormElement).comment.value;
    setComments([...comments, comment]);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <article className="bg-white p-6 mb-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-500 text-sm">{date}</p>
      <p className="mt-4 text-gray-600">{excerpt}</p>
      <a href={`#${postId}`} className="text-blue-600 hover:underline mt-4 inline-block">
        Read More
      </a>

      {/* Comment Section */}
      <div id={postId} className="mt-6">
        <h3 className="text-xl font-semibold">Comments</h3>
        <form onSubmit={handleCommentSubmit} className="mt-4">
          <textarea
            name="comment"
            className="w-full p-2 border rounded-md"
            placeholder="Your comment..."
            required
          ></textarea>
          <button type="submit" className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">
            Submit Comment
          </button>
        </form>
        <div className="mt-4">
          {comments.map((comment, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-md my-2">
              <p>{comment}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Post;