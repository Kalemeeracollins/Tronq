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
    <header >
    <div className="bg-white mb-1 rounded-xl flex items-center h-14 px-4 border-b w-full md:px-6 lg:justify-between lg:h-16 dark:bg-gray-950 dark:border-gray-850"  >
      <div className="md:hidden">
        <div className="items-center lg:hidden ">
          <button onClick={toggleMenu} className="rounded-full bg-gray-200 p-2">
            {isMenuOpen ? (
              ""
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
          <Card className="mb-8  bg-white pl-8 rounded-lg  shadow-lg">
            <nav className={`flex flex-col space-y-2 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex">
            <Link className="flex items-center space-x-2 text-blue-600 pt-4" href="#" passHref>
              <HomeIcon className="text-blue-600 " />
              <span>Home</span>
            </Link>
            <Button className="mt-2 mr-2 ml-32 bg-red-500 text-white hover:bg-red-600" onClick={closeMenu} variant="secondary">X</Button>
            </div>
            <Link className="flex items-center space-x-2 text-gray-700 relative pt-2" href="#" passHref>
              <BellIcon className="text-gray-700" />
              <span>Notifications</span>
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#" passHref>
              Pre-Published
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#" passHref>
              Published
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#" passHref>
              Content Library
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#" passHref>
              Insights
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#">
              Inbox+
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#">
              Monetization
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#">
              Creative Tools
            </Link>
            <Link className="flex items-center space-x-2 pt-2" href="#">
              Settings
            </Link>
            <Link className="flex items-center space-x-2 pt-2 pb-4" href="#">
              Resources
            </Link>
             
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
      <div className="ml-auto flex flex-col items-center gap-4 md:gap-6">
          <SettingsIcon className="h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]" variant="outline" />
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

 

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function SmartphoneIcon(props) {
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
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}


function WalletIcon(props) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}


function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}