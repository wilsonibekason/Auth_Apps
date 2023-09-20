"use client";

// src/components/FacialRecognition.tsx
import React, { useState } from "react";
import axios from "@/utils/baseUrl";
import Image from "next/image";
import toast from "react-hot-toast";

const FacialRecognition: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const facialUrlEndPoint = "/facial/process"; // Updated endpoint

  const captureFace = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.createElement("video");
      document.body.appendChild(video);
      video.srcObject = stream;
      await video.play();

      const canvas = document.createElement("canvas");
      canvas.width = video.width || 640;
      canvas.height = video.height || 480;
      const context = canvas.getContext("2d");
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        const capturedImage = canvas.toDataURL("image/jpeg");
        setImage(capturedImage);
        toast.success("Image has been captured");
        window.location.href = "/success/facialauth";
        // Send the captured image to the server for authentication
        await sendImageToServer(capturedImage);

        // Cleanup
        stream.getTracks().forEach((track) => track.stop());
        document.body.removeChild(video);
        document.body.removeChild(canvas);
      }
    } catch (error) {
      console.error("Error capturing face:", error);
    }
  };

  const sendImageToServer = async (imageData: string) => {
    try {
      const response = await axios.post(facialUrlEndPoint, {
        image: imageData,
        userId: userId,
        action: "authenticate",
      });
      toast.success("Your image has been captured successfully");
      console.log("Authentication response:", response.data);
    } catch (error) {
      toast.error("Error sending Image Data");
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="">
      {image ? (
        <>
          <Image src={image} alt="Captured Face" width={100} height={100} />
        </>
      ) : (
        <>
          <div className="flex flex-col space-y-5 justify-center items-center h-screen">
            {/*  */}
            <p className="text-slate-700 text-2xl md:text-5xl font-semibold">
              Enter your UserId to Login
            </p>
            <input
              type="text"
              name="userId"
              placeholder="e.g john23"
              className="max-w-[70%] md:max-w-[40%] w-full p-4 rounded-3xl placeholder:text-sm placeholder:font-medium focused:border-none focused:outline-none outline-none focused-within:outline-none text-center text-black"
              value={userId as string}
              onChange={(e) => setUserId(e.target.value)}
            />
            <button
              onClick={captureFace}
              disabled={!!!userId}
              className="p-3 bg-slate-200 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-2xl text-black"
            >
              Capture Face
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FacialRecognition;
