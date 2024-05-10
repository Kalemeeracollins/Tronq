'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import React, { useState, useEffect } from 'react';
import NavBar from "../../components/component/dashboardHeader"
import './style.css';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Welcome to your professional dashboard for Tronq Agenicies";
  const typingSpeed = 100; // Adjust typing speed as needed

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setUsers(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(fullText.substring(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);
  return (
    <div className="min-h-screen  bg-gray-100 p-1" style={{ backgroundImage: "url('/dashboardbackground.jpg')" }}>
       <NavBar/>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-64 rounded-xl flex flex-col bg-gray-200 max-h-screen " style={{ background: 'linear-gradient(to left, #83f5e5, #ffed00)' }}>
          <nav className={`flex  flex-col ml-4 space-y-2 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <Link className="flex items-center space-x-2  pt-4" href="/" passHref>
         <img
                     src="house.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Home</span>
        </Link>

        <Link className="flex items-center space-x-2  relative pt-2" href="/dashboard" passHref>
          <img
                     src="dashboard.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Dashboard</span>
        </Link>

        <Link className="flex items-center space-x-2  relative pt-2" href="/transactions" passHref>
          <img
                     src="transaction.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Transactions</span>
        </Link>

        <Link className="flex items-center space-x-2  relative pt-2" href="/whatsapp" passHref>
          <img
                     src="https://img.icons8.com/ios/100/whatsapp--v1.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Whatsapp</span>
        </Link>

        <Link className="flex items-center space-x-2  relative pt-2" href="/youtube" passHref>
          <img
                     src="https://img.icons8.com/color/48/youtube-play.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Youtube</span>
        </Link>

        <Link className="flex items-center space-x-2  relative pt-2" href="/marketStore" passHref>
          <img
                     src="marketstore.png"
                     alt="Image"
                     className=" h-10 w-10 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Market Store</span>
        </Link>
        {/* Add other links similarly */}

          <Link className="flex items-center space-x-2  relative pt-2" href="/customer-care" passHref>
            <img
                     src="customercare.png"
                     alt="Image"
                     className=" h-10 w-10 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
            <span>Customer Care</span>
          </Link>
          <div className="mx-8"></div> {/* Add space between the links */}
          <Link className="flex items-center space-x-2  relative pt-44" href="/logout" passHref>
            <img
                     src="logout.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
            <span>LogOut</span>
          </Link>
          </nav>
        </div>
        <div className="flex-1 lg:ml-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="mb-6" style={{ background: 'linear-gradient(to left, #FFD700, #FFA500)' }}>
                <CardHeader>
                  <CardTitle>{displayedText}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar>
                          <AvatarImage alt="Profile picture" src="/avatar.png?height=40&width=40" />
                        </Avatar>
                        <span>Username</span>
                      </div>
                      <Button variant="secondary">Invitation</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span>Invitation Link</span>
                      </div>
                      <Button variant="secondary">Go to Overview</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-wrap">
              {users.map((user) => (
                <div key={user.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 p-2">
                <Card className="flex-auto" key={user.id} style={{ background: user.backgroundColor }}>
                <CardHeader>
                  <CardTitle>{user.Name}</CardTitle>
                </CardHeader>
                <CardContent className="flex">
                  {user.Amount}
                  <img
                     src={user.Icon}
                     alt="Image"
                     className="ml-32 h-12 w-12 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
                </CardContent>

                                
                <CardContent>
                  {user.Message}
                </CardContent>
              </Card>
              </div>
          ))}
          </div>
            </div>
            <div >
              <Card className="mb-6" style={{ background: 'linear-gradient(to left, #f55c7a, #95ecb0)' }}>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
            <div className="flex flex-col items-center justify-center space-y-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-green-300 custom-scrollbar">
             //Transactions
              <section className="flex flex-col gap-6 p-4 md:p-6">
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
        <div className="p-4 flex items-center gap-4">
          <CircleCheckIcon className="h-6 w-6 text-green-500 dark:text-green-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">Deposit</p>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Completed
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">June 1, 2023</p>
            <p className="font-medium text-lg mt-2">$49.99</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
        <div className="p-4 flex items-center gap-4">
          <ClockIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">Withdraw</p>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Pending
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">June 3, 2023</p>
            <p className="font-medium text-lg mt-2">$99.99</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
        <div className="p-4 flex items-center gap-4">
          <CircleXIcon className="h-6 w-6 text-red-500 dark:text-red-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">Transfer</p>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                Failed
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">June 5, 2023</p>
            <p className="font-medium text-lg mt-2">$29.99</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
        <div className="p-4 flex items-center gap-4">
          <CircleCheckIcon className="h-6 w-6 text-green-500 dark:text-green-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">Withdraw</p>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Completed
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">June 7, 2023</p>
            <p className="font-medium text-lg mt-2">$79.99</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
        <div className="p-4 flex items-center gap-4">
          <ClockIcon className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">Transfer</p>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Pending
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">June 10, 2023</p>
            <p className="font-medium text-lg mt-2">$59.99</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-950 dark:text-gray-50">
        <div className="p-4 flex items-center gap-4">
          <CircleXIcon className="h-6 w-6 text-red-500 dark:text-red-400" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium">Deposit</p>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                Failed
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">June 12, 2023</p>
            <p className="font-medium text-lg mt-2">$39.99</p>
          </div>
        </div>
      </div>
    </section>

            </div>
                </CardContent>
              </Card>
              <Card style={{ background: 'linear-gradient(to left, #83f5e5, #ffed00)' }}>
                <CardHeader>
                  <CardTitle>Referral</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between">
                      <span>Performance</span>
                      <Select>
                        <SelectTrigger id="insights-timeframe">
                          <SelectValue placeholder="Last 7 Days" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="last-7-days">Last 7 Days</SelectItem>
                          <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex justify-between">
                      <span>1</span>
                      <span>People Reached</span>
                    </div>
                    <div className="flex justify-between">
                      <span>0</span>
                      <span>Follows</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
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

function LinkIcon(props) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
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

function CircleCheckIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function CircleXIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  )
}


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}