'use client'
import React, { useState } from 'react';
import NavBar from '../../components/component/NavBar';
import Modal from '../../components/component/Modal';

function Whatsapp() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [image, setImage] = useState(null);

   const openDownloadModal = () => {
    setIsDownloadModalOpen(true);
  };
  const closeDownloadModal = () => {
    setIsDownloadModalOpen(false);
  };
  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };
  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };
  
  const handleImageUpload = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };
  return (
    <>
      <NavBar />
      <div className="border-b-2 border-gray-200 shadow-md mt-4" >
      <div className="flex justify-between flex">
  <button onClick={openDownloadModal} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ml-16">
    Download
  </button>
  <button onClick={openUploadModal} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mr-16">
    Upload
  </button>
  </div>
  <h1 className="text-blue-500 text-4xl text-center ">Your Whatsapp Records will Appear Here</h1>
</div>
  <div className="flex justify-center">
      <div className="m-4">
        <Card className="w-full max-w-md shadow-md">
          <CardContent className="grid gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold">120views</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">June 23, 2023 at 3:45 PM</p>
              </div>
              <CircleCheckIcon className="h-8 w-8 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You have received a total of 120USD from 100 views.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="m-4">
        <Card className="w-full max-w-md shadow-md">
          <CardContent className="grid gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold">100 Views</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">June 23, 2023 at 3:45 PM</p>
              </div>
              <CircleCheckIcon className="h-8 w-8 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                You have received a total of 120USD from 100 views..
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <Modal isOpen={isDownloadModalOpen} >
      <div className="flex flex-col space-y-4">
      <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative bg-white rounded-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Download</h2>
            <button onClick={closeDownloadModal} className="text-gray-500 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <img src="/man.jpeg" alt="Your Image" className="h-64  max-w-md mx-auto rounded-lg" />
            <a href="/path-to-download-file" download className="bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition duration-300">Download</a>
          </div>
        </div>
      </div>
    </div>
      </div>
    </Modal>

    <Modal isOpen={isUploadModalOpen} >
      <div className="flex flex-col space-y-4">
      <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative bg-white rounded-lg p-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Upload</h2>
            <button onClick={closeUploadModal} className="text-gray-500 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <div>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="border border-gray-300 rounded-lg p-2" />
            </div>
            {image && (
              <img src={URL.createObjectURL(image)} alt="Uploaded Image" className="h-64 max-w-md mx-auto rounded-lg" />
            )}
            <input
             type="number"
             id="views"
             className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
             placeholder="Enter the total views"
            />
            <a onClick={handleImageUpload} download className="bg-red-500 text-white py-2 px-4 rounded-lg text-center hover:bg-green-600 transition duration-300">Upload</a>
          </div>
        </div>
      </div>
    </div>
      </div>
    </Modal>
</>
  );
}

export default Whatsapp;


import { CardContent, Card } from "@/components/ui/card"

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