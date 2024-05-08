'use client'
import React, { useState } from 'react';
import NavBar from '../../components/component/NavBar';
import Modal from '../../components/component/Modal';

function Transctions() {
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  const openDepositModal = () => {
    setIsDepositModalOpen(true);
  };

  const closeDepositModal = () => {
    setIsDepositModalOpen(false);
  };

  const openTransferModal = () => {
    setIsTransferModalOpen(true);
  };

  const closeTransferModal = () => {
    setIsTransferModalOpen(false);
  };

  const openWithdrawModal = () => {
    setIsWithdrawModalOpen(true);
  };

  const closeWithdrawModal = () => {
    setIsWithdrawModalOpen(false);
  };
  return (
    <>
      <NavBar />
      <div className="border-b-2 border-gray-200 shadow-md mt-4" >
      <div className="flex justify-between flex">
  <button onClick={openDepositModal} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ml-16">
    Deposit
  </button>
  <button onClick={openTransferModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
    Transfer
  </button>
  <button onClick={openWithdrawModal} className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mr-16">
    Withdraw
  </button>
  </div>
  <h1 className="text-blue-500 text-4xl text-center ">Your Transactions</h1>
</div>
  <div className="flex justify-center">
      <div className="mt-4">
        <Card className="w-full max-w-md shadow-md">
          <CardContent className="grid gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold">$49.99</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">June 23, 2023 at 3:45 PM</p>
              </div>
              <CircleCheckIcon className="h-8 w-8 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Payment received for your monthly subscription.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="mt-4">
        <Card className="w-full max-w-md shadow-md">
          <CardContent className="grid gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold">$49.99</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">June 23, 2023 at 3:45 PM</p>
              </div>
              <CircleCheckIcon className="h-8 w-8 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Payment received for your monthly subscription.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <Modal isOpen={isDepositModalOpen} onClose={closeDepositModal}>
        <h1>Deposit Modal</h1>
        <p>This is where your deposit content goes.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeDepositModal}>
          Close
        </button>
      </Modal>
      <Modal isOpen={isTransferModalOpen} onClose={closeTransferModal}>
        <h1>Transfer Modal</h1>
        <p>This is where your transfer content goes.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeTransferModal}>
          Close
        </button>
      </Modal>
      <Modal isOpen={isWithdrawModalOpen} onClose={closeWithdrawModal}>
        <h1>Withdraw Modal</h1>
        <p>This is where your withdraw content goes.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeWithdrawModal}>
          Close
        </button>
      </Modal>
</>
  );
}

export default Transctions;


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