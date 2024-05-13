// In your JSX file

import React from 'react';
import NavBar from '../../components/component/NavBar';
import Link from 'next/link';
import { CardContent, Card } from '@/components/ui/card';

function Whatsapp() {
  return (
    <>
      <NavBar />
      <div className="border-b-2 border-gray-200 shadow-md mt-4">
        <h1 className="m-4 text-blue-500 text-2xl text-center">Market-Store</h1>
      </div>
      <section className="w-full py-4 md:py-4 lg:py-4">
        <div className="container flex flex-wrap justify-center gap-6 px-4 md:justify-start">
          <CardWrapper />
          <CardWrapper />
          <CardWrapper />
          <CardWrapper />
          <CardWrapper />
        </div>
      </section>
    </>
  );
}

export default Whatsapp;

// CardWrapper component to wrap each card
const CardWrapper = () => {
  return (
          <div className="flex flex-col items-start justify-between rounded-lg border">
      <Card className="w-full max-w-md shadow-md">
        <h1 className="bg-red-500 pt-2 pb-2 text-center">MINI-STELLAR</h1>
        <CardContent className="grid gap-4 p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-2xl font-bold">Daily Earning</p>
            </div>
            <p>35 per View for 14 days</p>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Request Package
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
