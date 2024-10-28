import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Messages = ({ message, id }) => {
  console.log(message, id);
  const handleRetry = async () => {
    try {
      toast.success("Email sent successfully");
      await axios.post(`http://localhost:8000/info/sendemail/${id}`);
    } catch (error) {
      console.log("error in retry", error);
      toast.error("Failed to retry");
    }
  };

  const handleDiscard = () => {
    // Implement discard logic, such as clearing messages or navigating away
  };

  const handleMarked = () => {
    // Implement marking logic, such as marking the message as read or deleting it
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center left-0 absolute z-[99] top-[5rem] bg-[#000]">
      <div className="w-full p-[1rem] h-full bg-zinc-900 rounded-md overflow-y-auto">
        <div className="h-10 w-full mb-5">
          <h1 className="text-white text-[2rem] md:text-[3rem]">Messages</h1>
        </div>
        <div className="w-full h-full relative mt-16 flex flex-col items-center">
          <div className=" w-full h-[8rem] md:w-[40rem] bg-white rounded-md mb-4">
            <div className="px-[1rem] py-[1rem] flex-col sm:flex-row md:flex items-center ">
              <div className="h-16 w-full flex items-center">
                <h1 className="text-black text-[1rem] font-800 font-serif">
                  {message}
                </h1>
              </div>
              <div className="flex items-center  gap-5 sm:gap-4">
                <button
                  className="text-white text-[1rem] bg-blue-400 px-3 py-2 rounded-md"
                  onClick={handleRetry}
                >
                  Retry
                </button>
                <button
                  className="text-white text-[1rem] bg-red-400 px-3 py-2 rounded-md"
                  onClick={handleDiscard}
                >
                  Discard
                </button>
                <button
                  className="text-white text-[1rem] bg-gray-800 px-3 py-2 rounded-md"
                  onClick={handleMarked}
                >
                  Marked
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
