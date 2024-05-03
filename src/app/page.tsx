import React from 'react';
import Link from "next/link"
import BackgroundVideo from '../components/component/BackgroundVideo';

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden" >
        <BackgroundVideo video="background.mp4" />
      <div className="relative z-10 max-w-3xl px-6 py-12 sm:px-12 sm:py-20 text-center">
        <h1 className="text-4xl font-bold text-white mb-4 sm:text-5xl sm:mb-6">Welcome to our Platform</h1>
        <p className="text-lg text-gray-300 mb-8 sm:text-xl sm:mb-12">
          Discover the power of our cutting-edge tools and services.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            href="#"
          >
            Sign Up
          </Link>
          <Link
            className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-white font-medium rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            href="#"
          >
            Sign In
          </Link>
        </div>
      </div>
      </div>
  );
}
