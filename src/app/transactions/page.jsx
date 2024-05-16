"use client";
import React, { useState } from "react";
import NavBar from "../../components/component/NavBar";
import Modal from "../../components/component/Modal";
import { Button } from "@/components/ui/button";

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
      <div className="border-b-2 border-gray-200 shadow-md mt-4">
        <div className="flex justify-between flex">
          <Button
            onClick={openDepositModal}
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 ml-16">
            Deposit
          </Button>
          <Button
            onClick={openTransferModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Transfer
          </Button>
          <Button
            onClick={openWithdrawModal}
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 mr-16">
            Withdraw
          </Button>
        </div>
        <h1 className="text-blue-500 text-4xl text-center ">
          Your Transactions
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="mt-4">
          <Card className="w-full max-w-md shadow-md">
            <CardContent className="grid gap-4 p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-2xl font-bold">$49.99</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    June 23, 2023 at 3:45 PM
                  </p>
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
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    June 23, 2023 at 3:45 PM
                  </p>
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
        <div className="flex flex-col space-y-4">
          <label htmlFor="email" className="text-lg font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your Email"
          />

          <label className="text-lg font-semibold">Password</label>
          <input
            type="number"
            id="amount"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your Amount"
          />
          <Button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Deposit
          </Button>
        </div>
      </Modal>
      <Modal isOpen={isTransferModalOpen} onClose={closeTransferModal}>
        <div className="flex flex-col space-y-4">
          <label htmlFor="username" className="text-lg font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your username"
          />

          <label className="text-lg font-semibold">Password</label>
          <input
            type="number"
            id="amount"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your Amount"
          />
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Transfer Now
          </Button>
        </div>
      </Modal>
      <Modal isOpen={isWithdrawModalOpen} onClose={closeWithdrawModal}>
        <div className="flex flex-col space-y-4">
          <label htmlFor="phone" className="text-lg font-semibold">
            Phone
          </label>
          <input
            type="number"
            id="phone"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your phone"
          />

          <label className="text-lg font-semibold">Password</label>
          <input
            type="number"
            id="amount"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Enter your Amount"
          />
          <Button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Withdraw
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default Transctions;

import { CardContent, Card } from "@/components/ui/card";

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
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
