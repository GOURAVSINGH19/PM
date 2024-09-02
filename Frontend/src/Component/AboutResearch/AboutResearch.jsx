import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

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
];

const pastdata = [
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 1,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
];

const Userprogile = () => {
  const [open, setopen] = useState(false);
  const [items, setitems] = useState(data);

  const handleclick = (id) => {
    data.forEach((item) => {
      if (item.id === id) {
        console.log(item.id);
        setopen((prevOpen) => ({
          ...prevOpen,
          [item.id]: !prevOpen[item.id],
        }));
      }
    });
  };

  const removecard = (itemId) => {
    const updatedData = items.filter((item) => item.id !== itemId);
    setitems(updatedData);
  };
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <div>
        <Navbar />
      </div>
      <div className=" h-screen bg-zinc-900 flex overflow-hidden">
        <div className="w-[18vw] h-screen flex flex-col gap-3 p-3  border-r-[1px] border-zinc-700">
          <div className=" h-[30%] flex text-white items-center flex-col mt-10">
            <h1 className="text-xl ">User Profile</h1>
            <div className="mt-4 ">
              <img
                className="w-32 h-32 rounded-md"
                src="https://plus.unsplash.com/premium_vector-1719858610096-bba4498e5fc1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </div>
            <h1 className="mt-4 text-xl">User Name</h1>
          </div>
          <div className=" h-[50%]  text-white px-10">
            <h1 className="text-2xl  p-3 text-center">Contact</h1>
            <h2 className="text-xl py-3">
              Researcher:
              <div className="flex flex-col mt-3">
                <li>Researcher Name</li>
                <li>Researcher Name</li>
                <li>Researcher Name</li>
              </div>
            </h2>
            <div className="mt-5">
              <h2 className="text-xl py-3 ">Phone Number</h2>
              <span>+91</span>
              <h2 className="text-xl py-3 ">Email ID:</h2>
              <h2 className="text-xl py-3 ">LinkedIn ID:</h2>
            </div>
          </div>
        </div>
        <div className="w-[80%] p-4 flex flex-col">
          <div className="research-section">
            <h2>THIS IS RESEARCH PROOF SECTION</h2>
            <div className="section-content">researchproof</div>
          </div>
          <div className="research-section">
            <h2>THIS IS ABOUT RESEARCH SECTION</h2>
            <div className="section-content">aboutResearch</div>
          </div>
          <div className="research-section">
            <h2>THIS IS RESEARCH APPROACH SECTION </h2>
            <div className="section-content">researchApproach</div>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Userprogile;
