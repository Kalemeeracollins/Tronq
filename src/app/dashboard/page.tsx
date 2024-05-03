'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [users, setUsers] = useState([]);

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
  return (
    <div className="min-h-screen bg-gray-100 p-4" style={{ backgroundImage: "url('/dashboardbackground.jpg')" }}>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-64 flex flex-col bg-gray-200" style={{ background: 'linear-gradient(to left, #83f5e5, #ffed00)' }}>
          <nav className={`flex flex-col space-y-2 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <Link className="flex items-center space-x-2 text-blue-600" href="#" passHref>
              <HomeIcon className="text-blue-600" />
              <span>Home</span>
            </Link>
            <Link className="flex items-center space-x-2 text-gray-700 relative" href="#" passHref>
              <BellIcon className="text-gray-700" />
              <span>Notifications</span>
              <Badge className="absolute top-0 right-0" variant="secondary">
                2 new
              </Badge>
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
          </nav>
        </div>
        <div className="flex-1 lg:ml-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="mb-6" style={{ background: 'linear-gradient(to left, #FFD700, #FFA500)' }}>
                <CardHeader>
                  <CardTitle>Welcome to your professional dashboard</CardTitle>
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
                <Card className="flex-auto" key={user.id} style={{ background: 'linear-gradient(to left, #ff0f7b, #f89b29)' }}>
                <CardHeader>
                  <CardTitle>{user.Name}</CardTitle>
                </CardHeader>
                <CardContent>
                  {user.Amount}
                </CardContent>
                <CardContent>
                  {user.Message}
                </CardContent>
              </Card>
              </div>
          ))}
          </div>
            </div>
            <div>
              <Card className="mb-6" style={{ background: 'linear-gradient(to left, #f55c7a, #95ecb0)' }}>
                <CardHeader>
                  <CardTitle>Monetization</CardTitle>
                  <CardDescription>Last 7 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <img
                      alt="Monetization"
                      height="80"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "80/80",
                        objectFit: "cover",
                      }}
                      width="80"
                    />
                    <p>
                      Your Page is eligible for one or more of our monetization tools. Get set up today and put your
                      content to work for you.
                    </p>
                    <Button>Start Setup</Button>
                  </div>
                </CardContent>
              </Card>
              <Card style={{ background: 'linear-gradient(to left, #83f5e5, #ffed00)' }}>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
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
