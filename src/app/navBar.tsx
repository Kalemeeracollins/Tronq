'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8RscDDMY7TO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
 import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input"
import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return ( 
    <header style={{ backgroundImage: "url('/dashboardbackground.jpg')" }}>
    <div className="bg-white mt-1 mr-1 ml-1 flex items-center h-14 px-4 border-b w-full md:px-6 lg:justify-between lg:h-20 dark:bg-gray-950 dark:border-gray-850"  >
      <div className="md:hidden">
        <div className="items-center lg:hidden ">
          <button onClick={toggleMenu} className="rounded-full bg-gray-200 p-2">
            {isMenuOpen ? (
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>
      
      {/* Links div */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <Card className="mb-6 gap-6 bg-white p-4 rounded-lg shadow-lg">
            <nav className={`flex flex-col space-y-2 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <Link className="flex items-center space-x-2 text-blue-600" href="#" passHref>
              <HomeIcon className="text-blue-600" />
              <span>Home</span>
            </Link>
            <Link className="flex items-center space-x-2 text-gray-700 relative" href="#" passHref>
              <BellIcon className="text-gray-700" />
              <span>Notifications</span>
            </Link>
            <Link className="flex items-center space-x-2 " href="#" passHref>
              Pre-Published
            </Link>
            <Link className="flex items-center space-x-2" href="#" passHref>
              Published
            </Link>
            <Link className="flex items-center space-x-2" href="#" passHref>
              Content Library
            </Link>
            <Link className="flex items-center space-x-2" href="#" passHref>
              Insights
            </Link>
            <Link className="flex items-center space-x-2" href="#">
              Inbox+
            </Link>
            <Link className="flex items-center space-x-2" href="#">
              Monetization
            </Link>
            <Link className="flex items-center space-x-2" href="#">
              Creative Tools
            </Link>
            <Link className="flex items-center space-x-2" href="#">
              Settings
            </Link>
            <Link className="flex items-center space-x-2" href="#">
              Resources
            </Link>
             <Button className=" bg-red-500 text-white hover:bg-red-600" onClick={closeMenu} variant="secondary">X</Button>
          </nav>
          </Card>
        </div>
      )}

      <Link className="mr-6 flex" href="#">
        <MountainIcon className="h-6 w-6" />
        <h2>Tronq</h2>
      </Link>

      <div className="hidden md:flex w-full max-w-md items-center shrink-0">
        <div className="mx-4 w-full max-w-sm mr-16 flex justify-center mt-4">
          <Input className="mb-4 " placeholder="Search something..." />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4 md:gap-6">
        <Button className="h-9 text-sm font-medium" variant="ghost">
          Sign Up
        </Button>
        <Button className="h-9 text-sm font-medium" variant="outline">
          Login
        </Button>
      </div>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
