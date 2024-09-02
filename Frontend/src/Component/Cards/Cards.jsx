import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video from "../../assets/7btrrd.mp4";
import Dropdown from "../Dropdown/Dropdown";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const data = [
  {
    username: "example_user",
    likes: 150,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user",
    likes: 150,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user",
    likes: 150,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user",
    likes: 150,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
  {
    username: "example_user_2",
    likes: 150,
    id: 2,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    projects: [
      {
        project_name: "Awesome Project",
        date: "2024-07-09",
        project_details: {
          description: "This project aims to...",
          technologies_used: ["Python", "Flask", "JavaScript", "React"],
        },
      },
    ],
  },
];

const Cards = () => {
  const [items, setitems] = useState(data);

  return (
    <div className="w-full h-full relative">
      <div className=" w-[100%] relative bg-zinc-900 ">
        <video
          src={video}
          className="object-cover w-screen min-h-screen"
          muted
          loop
          autoPlay
        />
      </div>
      {/* bg-[rgba(16 18 27 / 40%)] backdrop-blur-[20px] */}
      <div className=" w-full h-full  absolute top-0 bg-[rgba(16 18 27 / 40%)] backdrop-blur-[20px] overflow-hidden">
        <div className=" md:max-w-screen-2xl py-2 px-4 mx-auto flex justify-between items-center">
          <span className="text-2xl font-serif">
            <h1>Topic</h1>
          </span>
          <span>
            <Dropdown
              title="Category"
              options={["ONGOING", "PAST", "ALL"]}
              func={(e) => setCategory(e.target.value)}
            ></Dropdown>
          </span>
        </div>
        <div className=" w-full min-h-screen md:h-full flex mt-4 overflow-hidden relative bg-[#2221211a] py-2 px-2">
          <div className="w-full flex gap-3 md:gap-2 overflow-scroll">
            {items.map((items, i) => (
              <div className="w-full h-fit">
                <div className="w-80 h-[22rem] md:w-96 md:h-[29rem]  bg-[#0005]  backdrop-blur-[20px] relative rounded-md">
                  <div className="min-w-ful h-12 flex items-center justify-between px-[.5rem] py-[.2rem] md:px-[.8rem] md:py-[1rem]">
                    <div className="">
                      <Link to="/user-info">
                        <img
                          src={items.img}
                          alt="user-img"
                          className="w-10 h-10 rounded-full"
                        />
                      </Link>
                    </div>
                    <span className="mr-2 text-xl">
                      <h1>{items.username}</h1>
                    </span>
                  </div>

                  <div className="min-w-full">
                    <div className="w-full p-[.5rem]   rounded-lg">
                      <img src={items.img} alt="img"  className="object-cover md:h-[20rem]"/>
                    </div>
                  </div>

                  <div className="w-full mt-4 ">
                    <div className="px-3 flex justify-between">
                      <button className="bg-blue-500 px-3 py-2 rounded-md">Profile</button>
                      <button className="bg-purple-400 px-3 py-2 rounded-md">View More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
