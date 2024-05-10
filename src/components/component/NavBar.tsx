'use client'
import { AvatarImage, AvatarFallback, Avatar} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Modal from './Modal';
import Link from 'next/link';
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
    <>
      <header className="flex items-center justify-between px-6 py-4 text-white shadow-lg dark:bg-gray-800" style={{ background: 'linear-gradient(to left, #FFD700, #FFA500)' }}>
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage alt="@shadcn" src="/profile.jpeg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Jared Palmer</h3>
              <span className="rounded-full bg-green-500 px-2 py-1 text-xs font-medium">Active</span>
            </div>
            <p className="text-sm text-gray-200">Tronq@acme.inc</p>
            <div className="flex items-center gap-4 text-sm font-medium">
              <div className="flex items-center gap-1">
                 <span>$5,234</span>
              </div>
              <div className="flex items-center gap-1">
                <span>$234</span>
              </div>
              <div className="flex items-center gap-1">
                <span>$54</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="grid gap-1 text-right">
            <p className="text-sm text-gray-200">Good morning,</p>
            <h4 className="text-lg font-semibold">Jared</h4>
          </div>
          <Avatar className="h-12 w-12">
            <AvatarImage alt="@shadcn" src="/logo.jpg" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <Button className="text-white hover:bg-white/20" variant="ghost">
            <div className="items-center">
            <button onClick={openModal} className="p-2">
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
            <span className="sr-only">Settings</span>
          </Button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Link href="#" passHref>
          <div className="flex items-center">
            <img src='logo.jpg' 
            alt="Image"
            className=" h-10 w-10 text-[#0284C7] dark:text-[#CBD5E1]"
            variant="outline"
            />
            <h2 className="ml-2">Tronq</h2>
          </div>
        </Link>
        <div className="ml-16">
        <Link className={`flex items-center space-x-2 ${isActiveLink('/') ? 'text-blue-600' : 'text-gray-700'} pt-4`} href="/" passHref>
         <img
                     src="house.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Home</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/transactions') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/dashboard" passHref>
          <img
                     src="dashboard.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Dashboard</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/transactions') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/transactions" passHref>
          <img
                     src="transaction.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Transactions</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/whatsapp') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/whatsapp" passHref>
          <img
                     src="https://img.icons8.com/ios/100/whatsapp--v1.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Whatsapp</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/youtube') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/youtube" passHref>
          <img
                     src="https://img.icons8.com/color/48/youtube-play.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Youtube</span>
        </Link>

        <Link className={`flex items-center space-x-2 ${isActiveLink('/transactions') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/marketStore" passHref>
          <img
                     src="marketstore.png"
                     alt="Image"
                     className=" h-10 w-10 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
          <span>Market Store</span>
        </Link>
      </div>
        {/* Add other links similarly */}

        <div className="flex">
          <Link className={`flex items-center space-x-2 ${isActiveLink('/customer-care') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/customer-care" passHref>
            <img
                     src="customercare.png"
                     alt="Image"
                     className=" h-10 w-10 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
            <span>Customer Care</span>
          </Link>
          <div className="mx-8"></div> {/* Add space between the links */}
          <Link className={`flex items-center space-x-2 ${isActiveLink('/logout') ? 'text-blue-600' : 'text-gray-700'} relative pt-2`} href="/logout" passHref>
            <img
                     src="logout.png"
                     alt="Image"
                     className=" h-8 w-8 text-[#0284C7] dark:text-[#CBD5E1]"
                     variant="outline"
                  />
            <span>LogOut</span>
          </Link>
        </div>
      </Modal>
      </header>
    </>
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

