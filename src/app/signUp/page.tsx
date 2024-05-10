"use client"
import BackgroundVideo from '../../components/component/BackgroundVideo';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="relative h-screen text-white">
      <BackgroundVideo video="/signInBg.mp4" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <div className="flex w-full max-w-4xl items-center rounded-lg bg-white p-8 shadow-lg bg-blue-500 bg-opacity-50 p-4">
            <div className="flex-1 space-y-6">
              <div className="mb-6 text-center">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sign Up</h1>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Create an account using your email to access our services.
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" className="text-black" placeholder="name@example.com" required type="email" />
                </div>
                <div>
                  <Label htmlFor="text">Username</Label>
                  <Input id="username" className="text-black" placeholder="Enter your UserName" required type="text" />
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Label htmlFor="country_code">Country Code</Label>
                    <select id="country_code" name="country_code" className="block w-full py-2 text-black px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                      <option value="+254">+254 (Kenya)</option>
                      <option value="+255">+255 (Tanzania)</option>
                      <option value="+256">+256 (Uganda)</option>
                      <option value="+250">+250 (Rwanda)</option>
                      <option value="+257">+257 (Burundi)</option>
                      <option value="+211">+211 (South Sudan)</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="Enter phone number" required className="text-black text-black block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                  </div>
                </div>
                <div className="relative">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" className="text-black" placeholder="Enter your password" required type="password" />
                  <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost">
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
                <div className="relative">
                  <Label htmlFor="password">Confirm Password</Label>
                  <Input id="password" className="text-black" placeholder="Confirm your Password" required type="password" />
                  <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost">
                    <EyeIcon className="h-4 w-4" />
                    <span className="sr-only">Toggle password visibility</span>
                  </Button>
                </div>
                <Link
                  className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href="#"
                >
                  Forgot password?
                </Link>
                <div className="flex justify-between items-center">
                  <Button className="relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600" type="submit">
                    Create Account
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    className="font-medium text-gray-1000 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    Need help?
                  </Link>
                  <Link
                    className="font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="/signIn"
                  >
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
            <div className="ml-8 hidden rounded-lg bg-gray-100 p-4 dark:bg-gray-800 md:block">
              <img
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
  )
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
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
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
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
