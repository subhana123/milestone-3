import './globals.css';
import Hero from '@/components/Hero';
import Link from 'next/link';
import Image from 'next/image';
import About from '@/components/About';

const Home = () => {
  const posts = [
    { id: '1', title: 'Ice Cream Website', date: 'Nov 17, 2024', excerpt: 'Ice cream is more than just a dessert—its an experience! In this project I delved into the deliciously creative world of ice cream crafting a design that reflects the cool and refreshing vibes of everyones favorite treat', image: '/images/ice cream.jpg' },

    { id: '2', title: 'Baby Baba Website', date: 'Nov 18, 2024', excerpt: 'Welcome to Baby Baba Shop the ultimate destination for stylish comfortable and high-quality baby clothing! 👶✨ Whether you are shopping for a newborn or a trendy toddler this e-commerce platform', image: '/images/baby.jpeg' },

    { id: '3', title: 'Perfume Website', date: 'Nov 19, 2024', excerpt: 'Welcome to Aroma Essence your ultimate destination for captivating fragrances that define elegance and sophistication 🌸✨ Discover a world of premium perfumes style and leave a lasting impression 💫', image: '/images/perfume.jpeg' },

    { id: '4', title: 'Blog Website', date: 'Nov 20, 2024', excerpt: 'Welcome to My Blog Website 📝✨ where creativity meets expression! Dive into a world of insightful articles personal stories, and engaging content all crafted to inspire and inform 🌟📚', image: '/images/blog.jpg' },

    { id: '5', title: 'Resume Builder', date: 'Nov 21, 2024', excerpt: 'Introducing the Resume Builder 💼✨—your personalized tool to create a standout resume with ease! Simply input your details and watch your professional profile come to life in minutes! 📝🚀', image: '/images/builder.png' },

    { id: '6', title: 'Cloths Website', date: 'Nov 22, 2024', excerpt: 'Welcome to StyleSphere 👗✨ your one-stop destination for trendy and affordable fashion! Discover the latest styles and elevate your wardrobe with ease 🛍️💃', image: '/images/cloth.webp' },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      {/* <AboutCard/> */}
      <main className="max-w-6xl mx-auto p-6">
        <section id="home">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Latest Posts</h2>
          {/* Adjusting flexbox layout for responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-black border-2 border-blue-600 text-white p-6 shadow-lg rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 w-full  hover:border-blue-900 ">
                {/* Post Image */}
                <div className="mb-4">
                  <Image src={post.image} alt={post.title} width={500} height={500} className="w-full border-2 border-pink-500 h-48 object-cover rounded-lg shadow-md" />
                </div>
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-teal-100 mb-4">{post.date}</p>
                <p className="text-gray-200 mb-4">{post.excerpt}</p>

              

                {/* Read More Link */}
                <Link href={`/posts/${post.id}`} className="text-blue-500 hover:text-pink-500 font-semibold transition duration-300">
                  Read More...
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <About/>
    </div>
  );
};

export default Home;