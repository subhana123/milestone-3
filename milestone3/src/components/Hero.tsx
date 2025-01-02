'use client'
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Animation */}
      <div className="animate-bubble">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        {/* You can add more bubbles as needed */}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 sm:p-12 text-center">
       
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-wide inline-block border-b-4 border-pink-600 pb-2">
  Subhana Rameez
</h1> <br /> <br />

        <p className="text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed">
          Welcome to my blog Website! <span className="text-pink-600">  I share my thoughts</span> projects and everything that inspires 
          <span className="text-pink-600"> Explore categories</span> below to find content that sparks your interest
        </p> 

        {/* Blog Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-10">
          <button className="bg-gradient-to-r  from-blue-900  to-pink-900 border-2 border-pink-500 px-4 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl lg:text-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer transform hover:bg-gradient-to-l  hover:from-pink-700 hover:to-blue-600">
            <Link href="/technology" className="block text-white text-center">Technology</Link>
          </button>
          <button className="bg-gradient-to-r  from-blue-900 to-pink-900 border-2 border-pink-500 px-4 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl lg:text-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer transform hover:bg-gradient-to-l  hover:from-pink-700 hover:to-blue-600">
            <Link href="/design" className="block text-white text-center">Design</Link>
          </button>
          <button className="bg-gradient-to-r   from-blue-900 to-pink-900 border-2 border-pink-500 px-4 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl lg:text-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer transform hover:bg-gradient-to-l hover:from-pink-700 hover:to-blue-600">
            <Link href={'/lifestyle'} className="block text-white text-center">Lifestyle</Link>
          </button>
        </div>

        {/* Call-to-Action */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center">
          <button className="flex items-center bg-gradient-to-r from-blue-900 to-pink-900 border-2 border-pink-500 px-4 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl lg:text-2xl text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
         Check out my latest posts
        
      </button>
        </div>
        </div>
    </section>
  );
}