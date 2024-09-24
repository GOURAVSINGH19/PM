import React from "react";

const Messages = ({ message }) => {

  
  return (
    <div className="bg-[#080707a4] absolute top-[5rem] p-[1rem] left-0 w-screen h-screen flex justify-end z-[99]">
      <div className="w-[30rem] p-[1rem] h-[40rem] bg-zinc-800 rounded-md ">
        <h1 className="text-white text-[2rem] ">Messages</h1>
        <div className="w-full h-full relative mt-5">
          {/* {message.map((items, i) => { */}
          <div className="w-[25rem] h-[8rem] bg-purple-800 rounded-md">
            <div className="px-[1rem] py-[1rem]">
              <h1 className="text-white text-[1rem] mb-8">
                Your Submission rejected
              </h1>
              <div className="flex  items-center justify-between">
                <button className="text-white text-[1rem] bg-blue-400 px-3 py-2 rounded-md">
                  Retry
                </button>
                <button className="text-white text-[1rem] bg-red-400 px-3 py-2 rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
          {/* })} */}
        </div>
      </div>
    </div>
  );
};

export default Messages;
