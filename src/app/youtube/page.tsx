"use client";
import React, { useState } from "react";
import NavBar from "../../components/component/NavBar";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";

function Whatsapp() {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlayClick = () => {
    setIsVideoVisible(true);
  };

  return (
    <>
      <NavBar />
      <div className="border-b-2 border-gray-200 shadow-md mt-4">
        <h1 className="text-blue-500 text-2xl pb-2 text-center">
          Youtube Earnings
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="mt-4">
          <Card className="w-full max-w-md shadow-md">
            <CardContent className="grid gap-4 p-6">
              <div className="items-center justify-between">
                <h1 className="text-xl font-bold">About Youtube Earnings.</h1>
                <span className="text-sm">
                  About Youtube Version 2.0V7 allows you to earn once daily with
                  different Youtube short Uploaded videos
                </span>
                <p className="text-sm">
                  <span className="font-bold">Youtube Balance:</span> 9999UGX
                </p>
              </div>
              <div className="flex justify-center">
                {" "}
                {/* Center the Button horizontally */}
                <Button
                  onClick={handlePlayClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
                  Play Video
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {isVideoVisible && (
        <div className="flex justify-center mt-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0NGWT9COcEI"
            frameborder="0"
            allowfullscreen></iframe>
        </div>
      )}
    </>
  );
}

export default Whatsapp;
