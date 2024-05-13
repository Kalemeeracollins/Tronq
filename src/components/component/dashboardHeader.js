'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './modal';
import Image from "next/image"
import Link from 'next/link';
import { Input } from '@/components/ui/input';
// import { SettingsIcon, MountainIcon, BellIcon, HomeIcon } from './Icons';

export default function NavBar() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const isActiveLink = (href) => {
    return router.pathname === href;
  };

  return (
    <header>
      <div className="bg-white mb-1 rounded-xl flex items-center h-14 px-4 border-b w-full md:px-6 lg:justify-between lg:h-16 dark:bg-gray-950 dark:border-gray-850">
        <div className="md:hidden">
          <div className="items-center lg:hidden">
            <button onClick={openModal} className="rounded-full bg-gray-200 p-2">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        <Link href="#" passHref>
          <div className="mr-6 flex items-center">
            <Image src='/logo.jpg' 
            alt="Image"
            height={100}
            width={100}
            className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
            variant="outline"
            />
            <h2 className="ml-2">Tronq</h2>
          </div>
        </Link>

        <div className="hidden md:flex w-full max-w-md items-center shrink-0">
          <div className="mx-4 w-full max-w-sm mr-16 flex justify-center mt-4">
            <Input className="mb-4" placeholder="Search something..." />
          </div>
        </div>

        <div className="ml-auto flex flex-col items-center gap-4 md:gap-6">
          <SettingsIcon className="h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]" variant="outline" />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="ml-16">
        <Link className={`flex items-center space-x-2 ${isActiveLink('/') ? 'text-blue-600' : 'text-gray-700'} pt-4`} href="/" passHref>
         <Image
                     src="/house.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Home</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/transactions') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/dashboard" passHref>
          <Image
                     src="/dashboard.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Dashboard</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/transactions') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/transactions" passHref>
          <Image
                     src="/transaction.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Transactions</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/whatsapp') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/whatsapp" passHref>
          <Image
                     src="https://img.icons8.com/ios/100/whatsapp--v1.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Whatsapp</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/youtube') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/youtube" passHref>
          <Image
                     src="https://img.icons8.com/color/48/youtube-play.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Youtube</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/transactions') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/marketStore" passHref>
          <Image
                     src="/marketstore.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-10 w-10 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Market Store</span>
        </Link>
      </div>
        {/* Add other links similarly */}

        <div className="flex">
          <Link className={`flex items-center space-x-2 ${isActiveLink('/customer-care') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/customer-care" passHref>
            <Image
                     src="/customercare.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-10 w-10 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
            <span>Customer Care</span>
          </Link>
          <div className="mx-8"></div> {/* Add space between the links */}
          <Link className={`flex items-center space-x-2 ${isActiveLink('/logout') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/logout" passHref>
            <Image
                     src="/logout.png"
                     alt="Image"
                     height={100}
                     width={100}
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
            <span>LogOut</span>
          </Link>
        </div>
      </Modal>
    </header>
  );
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

