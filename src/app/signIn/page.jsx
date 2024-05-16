"use client";
import react, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import BackgroundVideo from "../../components/component/BackgroundVideo";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e) => {};

  return (
    <div className="relative h-screen">
      <BackgroundVideo
        video="/signInBg.mp4"
        className="min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className=" absolute inset-0 flex items-center justify-center z-10">
        <div className="text-white text-center">
          <div className="flex w-full max-w-4xl items-center rounded-lg bg-white p-8 shadow-lg bg-blue-500 bg-opacity-50 p-4">
            <div className="flex-1 space-y-6">
              <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sign In
                </h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Enter your UserName and password to access your account.
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="username">UserName</Label>
                  <Input
                    id="eusername"
                    placeholder="name@example.com"
                    required
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    required
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    className="absolute bottom-1 right-1 h-7 w-7"
                    size="icon"
                    variant="ghost">
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
                <Link
                  className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#">
                  Forgot password?
                </Link>
                <div className="flex justify-between items-center">
                  <Button
                    className="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
                    type="submit">
                    <Link href="/">Sign In</Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#">
                    Need help?
                  </Link>
                  <Link
                    className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/signUp">
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
            <div className="ml-8 hidden rounded-lg bg-gray-100 p-4 dark:bg-gray-800 md:block">
              <Image
                alt="Sign in illustration"
                className="aspect-[3/4] object-cover"
                height={400}
                src="/signInImg.jpeg"
                width={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function XIcon(props) {
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
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function EyeIcon(props) {
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
      strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
