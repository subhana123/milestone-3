'use client'
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-black text-white py-16  sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 text-center ">
        {/* Profile Image and Intro */}
        <div className="flex flex-col items-center mb-12">
          <Image
            src='/public/images/qk2291ko.png' // Replace with your image path
            alt="Subhana"
            width={150} // Set the width
            height={150} // Set the height
            className="rounded-full mb-4 border-4 border-pink-600"
          />
          
          <p className="text-lg sm:text-xl lg:text-xl mb-8 leading-relaxed">
            I am a passionate content creator sharing my thoughts on technology design and lifestyle Welcome to my corner of the web!
          </p>
        </div>

        {/* About the Blog */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-pink-600 mb-4">About This Blog</h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-8">
            This blog is a place where I share my insights experiences and knowledge in various fields that I am passionate about From technology updates and design trends to lifestyle tips and personal growth this blog covers it all Explore the different categories to find content that inspires and informs you
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="https://www.linkedin.com/in/iqra-naz-43899b2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <button className="bg-gradient-to-r from-blue-900 to-pink-900 border-2 border-pink-500 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl lg:text-2xl text-white hover:shadow-lg hover:bg-gradient-to-l hover:from-pink-700 hover:to-blue-600 transition-all duration-300">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}