'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  projectLink: string;
}

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  // Sample post data (replace this with actual data fetching from API or Static Generation)
  const post: Post | null = getPostById(id);

  const [comments, setComments] = useState<{ name: string; comment: string }[]>([
    { name: 'Alice', comment: 'This is an amazing project iqra!' },
    { name: 'Bob', comment: 'Great job! Really inspiring.' },
    { name: 'Charlie', comment: 'Love the design and functionality!' },
  ]);

  if (!post) {
    return notFound(); // If post not found, show 404
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value;
    setComments([...comments, { name, comment }]);
    form.reset();
  };

  return (
    <div className="max-w-full mx-auto p-6 bg-gray-200 text-black">
      <article className="bg-gradient-to-r from-blue-200 to-pink-200 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Section: Content */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-4xl font-bold text-blue-900">{post.title}</h2>
            <br />
            <p className="text-gray-950 text-sm">{post.date}</p>
            <div className="mt-6 text-gray-900">
              <p>{post.content}</p>
              <Link
                href={post.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-700 hover:text-pink-700 mt-4 inline-block font-semibold text-lg">
                Visit Project..
              </Link>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="md:w-1/2 p-6 flex items-center justify-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={500}
              height={500}
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md border-4 border-pink-500"
            />
          </div>
        </div>

        {/* Comment Section */}
        <div className="mt-8 p-6">
          <h3 className="text-2xl font-semibold text-blue-900">Comments</h3>
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <input
              type="text"
              name="name"
              className="w-full p-4 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Your Name"
              required
            />
            <textarea
              name="comment"
              className="w-full p-4 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Add your comment here..."
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-800 border-2 border-blue-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-900 transition duration-300"
            >
              Submit Comment
            </button>
          </form>

          {/* Display Comments */}
          <div className="mt-6">
            {comments.map((comment, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4 border-2 border-gray-200"
              >
                <p className="text-blue-900 font-semibold">{comment.name}</p>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

// Mock function to simulate fetching data
const getPostById = (id: string) => {
  const posts: Post[] = [
    {
            title: 'Project 1 - Choclates Website',
           date: 'Nov 17, 2024',
          content: `Explore the Sweet World of Choclates!
         Choclates is more than just a dessert—its an experience! In this project I delved into the deliciously creative world of ice cream crafting a design that reflects the cool and refreshing vibes of everyones favorite treat 🍨 
      🌟 Key Highlights of the Project:
       Visually Appealing Design: A sleek and modern interface featuring tempting choclates graphics  
       Interactive User Experience: 
         - Smooth animations for a playful experience  
         - Responsive layout that works seamlessly on all devices  
       Professional Touch: 
         Integrated a blog-style layout with an elegant design showcasing choclate varieties and their history  
       Tech Stack:
         Nextjs for structure and Tailwind for styling  
         typescript for interactivity 
      🎯 Whats Unique?
      - A vibrant color palette inspired by the flavors of ice cream  
      - Dynamic transitions to captivate the user  
      - Creative illustrations that make the site a visual treat
      `,
      imageUrl: '/public/images/ice cream.jpg',
      projectLink: 'https://ice-creame-site.vercel.app/'
      
          },
      
          {
            title: 'Project 2 - Baby Baba Shop',
           date: 'Nov 18, 2024',
           content: `
      Your One-Stop Shop for Adorable Baby Clothing! 👶🍼🌟 About the Project:
      Baby Baba Shop is a delightful e-commerce platform that caters to all your baby clothing needs From cute onesies to trendy outfits this project is a testament to modern online shopping done right!  
      ✨ Key Features:User-Friendly Interface:
         - Clean easy-to-navigate layout to ensure a seamless shopping experience for parents  
         - Cute design elements that reflect the charm of baby products 
      Comprehensive Product Listings:
         - Categories for newborns toddlers and kids
         - Detailed product pages with multiple images, size guides and fabric details  
      Interactive Features:
         - Cart functionality with real-time updates 🛒  
         - Secure payment gateway integration  
         - Wishlist to save favorite items 💖  
       What Makes Baby Baba Shop Special?
      - A focus on quality and comfort for baby clothing  
      - Personalized recommendations based on browsing history  
      - Responsive design to ensure compatibility on mobile and desktop devices  
      🌈 My Experience:
      Developing Baby Baba Shop was a rewarding journey blending creativity with technical expertise Its a proud addition to my portfolio showcasing my ability to build a fully functional and user-friendly e-commerce platform 🚀 `,
      imageUrl: '/public/images/baby.jpeg',
      projectLink: 'https://baby-baba-shop.vercel.app/'},
      
          {
            
      
            title: 'Project 3 - Perfume Website',
           date: 'Nov 19, 2024',
          content: `Indulge Your Senses with Elegant Fragrances! 💐✨ 
      🌟 About the Project:
      Perfume Website is your go-to platform for exploring and purchasing luxurious high-end perfumes that elevate your personal style From floral notes to woody scents🌹🎉 this project brings the best of the fragrance world to your ✨ Key Features:Sleek and Elegant Design:
         - A minimalist visually appealing interface to highlight the beauty of each fragrance  
         - Soft color palettes that complement the luxurious feel of the products  
      Extensive Product Collection:
         - Various perfume categories to choose from, such as Floral Woody Fruity and more  
         - Detailed descriptions of each scent including top middle, and base notes  
      
      Interactive User Experience:
         - Search and filter features to easily find your perfect scent  
         - Customer reviews to guide purchasing decisions
         - Wishlist functionality for saving favorite fragrances  
      🌟 My Experience:
      Creating this perfume website allowed me to blend creativity with technology. The result is a beautiful, interactive platform where users can indulge in the luxury of perfumes I am proud of how it turned out and I cant wait for you to experience it! 🌹🎉`,
      imageUrl: '/public/images/perfume.jpeg',
      projectLink: 'https://my-perfume-store-s5tl.vercel.app/'
      
          },
          {
      
            title: 'Project 4 - Blog Website',
      date: 'Nov 20, 2024',
      content: `Exploring the World of AI and Technology! 🌐✨**  
      🌟 About the Project: 
      This blog website is dedicated to exploring the latest developments in Artificial Intelligence (AI) and how its transforming the world around us From AI in healthcare to its impact on daily life my posts offer deep insights analysis and discussions on the power of AI  
      🧠 AI-Related Posts: 
      AI in Healthcare:
         How AI is revolutionizing diagnostics personalized treatment and patient care 
      The Future of Work with AI:
         Exploring how AI is shaping industries and the future job market  
      Ethical Considerations in AI:
         A discussion on the ethical dilemmas posed by AI technology including privacy bias and decision-making 
      AI and Everyday Life:
         How AI influences our daily activities from smart assistants to predictive algorithms 
         🌟 My Thoughts:
      Writing about AI has been an exciting journey! Its an ever-evolving field and I enjoy sharing my thoughts and research on how AI is shaping our future 🚀✨`,
      imageUrl: '/public/images/blog-blogging-blogglers-theme-design-vector-illustration-graphic-62576375.webp',
      projectLink: 'https://my-app-delta-two-79.vercel.app/'
      
          },
        {
            title: 'Project 5 - CV Maker',
           date: 'Nov 21, 2024',
           content:`Introducing the Resume Builder 💼✨—your personalized tool to create a standout resume with ease! Simply input your details and watch your professional profile come to life in minutes! 📝🚀 Create a Professional Resume in Minutes! 💼✨
      🌟 About the Project:
      The Resume Builder allows users to easily create customize and download their resumes Whether you are a student professional or freelancer this tool helps you design a polished resume to make a great first impression
      ✨ Key Features:
      User-Friendly Interface:
         - Simple and intuitive form inputs to add personal details skills and work experience  
      Customizable Templates: 
         - Multiple templates to choose from for a professional look  
      Download and Share:
         - Option to download your resume as a PDF or share it online with a unique URL  
      Responsive Design: 
         - Fully responsive layout to ensure a seamless experience on both desktop and mobile devices   
      🌟 My Experience:
      Developing this project was a great way to apply my web development skills while creating a practical tool for users The process of designing a user-friendly resume builder with customization options was both fun and rewarding`,
      imageUrl: '/public/images/builder.png',
      projectLink: 'https://milestone-5-seven-ecru.vercel.app/'
      
          },
          {title: 'Project 6 - Cloths Website',
            date: 'Nov 22, 2024',
            content: `Fashion for Every Occasion Right at Your Fingertips! 🛍️✨ 
            🌟 About the Project: 
            The Cloths Website is a modern online store designed to cater to all your fashion needs Whether you are looking for casual everyday wear or stylish outfits for special occasions this platform ensures a seamless and enjoyable shopping experience  
            ✨ Key Features:
            Elegant and Modern Design:
               - A sleek interface that highlights the beauty of each product 
               - Stunning visuals and smooth animations to enhance user engagement  
               Diverse Product Range:
               - Categories for Men Women and Kids offering something for everyone  
               - Seasonal collections and exclusive deals to keep your wardrobe updated
               Smart Shopping Features: 
               - Advanced filters to sort by size color and price 
               - Wishlist and cart functionalities for easy purchases  
            
            Tech Highlights: 
               - Built using HTML CSS and JavaScript  
               - Fully responsive ensuring optimal performance on all devices  
            🎯 Why Shop Here?
            - Discover the latest trends with our regularly updated collections  
            - Enjoy affordable prices without compromising on quality  
            - Experience a user-friendly platform that makes shopping effortless  
             🌟 My Thoughts:
             Building this project was an exciting opportunity to design a stylish and functional platform for fashion enthusiasts The goal was to create a seamless shopping experience that combines aesthetics with practicality and I am proud of how it turned out! 💻🎉 `,
             imageUrl: '/public/images/cloth.webp',
            projectLink: 'https://new-e-commerce-4d2v.vercel.app/'
            
          },
  ];

  return (
    posts.find((post) => post.title.toLowerCase().includes(id.toLowerCase())) || null
  );
};