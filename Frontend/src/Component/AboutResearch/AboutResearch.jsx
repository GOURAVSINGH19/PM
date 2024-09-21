import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import axios from "axios";

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

const Userprofile = () => {
  const [user, setusers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/info/Uploader");
        setusers(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <p className="text-white text-3xl capitalize flex justify-center items-center">
        Error: {error.message}
      </p>
    );
  return (
    <div className="w-screen h-screen overflow-x-hidden">
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
            <h1 className="mt-4 text-xl">{user[0].username}</h1>
          </div>
          <div className=" h-[50%]  text-white px-10">
            <h1 className="text-2xl  p-3 text-center">Contact</h1>
            <h2 className="text-xl py-3">
              Researcher:
              {user.map((name) => (
                <div className="flex flex-col mt-3">
                  <li key={user._id}>{name.facultyname}</li>
                </div>
              ))}
            </h2>
            <div className="mt-5">
              <h2 className="text-xl py-3 ">Phone Number</h2>
              <span>+91 {user[0].phone}</span>
              <h2 className="text-xl py-3 ">Email ID:{user[0].email}</h2>
              <h2 className="text-xl py-3 ">LinkedIn ID:</h2>
            </div>
          </div>
        </div>
        <div className="w-[80%] p-4 flex flex-col">
          <div className="research-section">
            <h2>{user[0].researchtitle}</h2>
            <div className="section-content">researchproof</div>
          </div>
          <div className="research-section">
            <h2>THIS IS ABOUT RESEARCH SECTION</h2>
            <div className="section-content text-white">
              {user[0].researchdescription}
            </div>
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

export default Userprofile;
