"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Join our affiliate network and start earning commissions on every sale you refer. Its easy, fast, and  profitable.";
  const typingSpeed = 70; // Adjust typing speed as needed

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
  }, []); // Empty dependency array ensures this effect runs only once after initial render
  return (
    <>
      <main className="flex-1">
        <section className="w-full pt-12 pb-8 md:pt-24 lg:pt-12 xl:pt-12 bg-gradient-to-r from-[#6366F1] to-[#EC4899]">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white">
                  Earn Big with Our Affiliate Program
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-400">
                  {displayedText}
                </p>
                <div className="space-x-4 mt-6">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#6366F1] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#EC4899] dark:text-white dark:hover:bg-[#EC4899]/90 dark:focus-visible:ring-gray-300"
                    href="signUp">
                    Sign Up Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-[#EC4899] dark:hover:bg-[#EC4899]/20 dark:focus-visible:ring-gray-300 ml-auto"
                    href="signIn">
                    Sign In
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <video
                  autoPlay
                  loop
                  muted
                  className="right-0 mb-4 ml-32 rounded-xl object-cover  "
                  style={{ width: "450px", height: "450px" }}>
                  <source src="/affiliate.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#6366F1] px-3 py-1 text-sm text-white">
                  Featured Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1F2937]">
                  High-Converting Products to Promote
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our curated selection of products offer high commissions and
                  convert at industry-leading rates. Start earning today.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="bg-[#6366F1] text-white p-2 rounded-full">
                    <BoltIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937]">
                    High-Ticket Gadgets
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Promote our cutting-edge tech products and earn up to 20%
                  commissions.
                </p>
                <Link
                  className="text-[#6366F1] font-medium hover:underline"
                  href="#">
                  View Products
                </Link>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="bg-[#EC4899] text-white p-2 rounded-full">
                    <GaugeIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937]">
                    Subscription Services
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Earn recurring commissions by promoting our popular
                  subscription services.
                </p>
                <Link
                  className="text-[#EC4899] font-medium hover:underline"
                  href="#">
                  View Products
                </Link>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-3">
                  <div className="bg-[#6366F1] text-white p-2 rounded-full">
                    <SettingsIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937]">
                    Lifestyle Products
                  </h3>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Promote our high-quality lifestyle products and earn generous
                  commissions.
                </p>
                <Link
                  className="text-[#6366F1] font-medium hover:underline"
                  href="#">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#6366F1] to-[#EC4899]">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">
                About Tronq Agencies
              </h2>
              <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                TRONQ AGENCIES is a Legitimate Certified Agency offering you a
                revolutionized ways of earning at the comfort of your home using
                your smartphone or laptop HOW DO YOU GET STARTED?
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#6366F1] shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-[#EC4899] dark:text-white dark:hover:bg-[#EC4899]/90 dark:focus-visible:ring-gray-300"
                href="/signUp">
                Sign Up Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-white border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-[#EC4899] dark:hover:bg-[#EC4899]/20 dark:focus-visible:ring-gray-300"
                href="#">
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Chat with Our Team
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Have questions about our affiliate program? Chat with our team
                  to get the answers you need.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="min-h-[100px]"
                      id="message"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="w-full" type="submit">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gradient-to-r from-[#6366F1] to-[#EC4899]">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Tronq. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            @ck_tech
          </Link>
        </nav>
      </footer>
    </>
  );
}

function BoltIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function GaugeIcon(props) {
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
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
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
      strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
