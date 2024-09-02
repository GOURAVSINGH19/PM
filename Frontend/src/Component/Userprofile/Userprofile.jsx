import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import axios from "axios";

const items = [
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
  {
    username: "example_user",
    likes: 150,
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 2,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },

  {
    researchname: "Awesome Project",
    likes: 20,
    id: 3,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 4,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
  {
    researchname: "Awesome Project",
    likes: 20,
    id: 5,
    img: "https://images.unsplash.com/photo-1720371300677-ba4838fa0678?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZH",
  },
];

const Userprogile = () => {
  const [users, setusers] = useState([]);
  // const [pastitem, setpastdata] = useState(pastdata);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const removecard = async (itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/info/Uploader/${itemId}`
      );
      const data = (response) => response.filter((item) => item.id !== itemId);
      setusers(data);
      setLoading(false);
    } catch (error) {
      console.error("Error removing card:", error);
      setError(error);
      setLoading(false);
    }
  };

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
  if (error) return <p className="text-white">Error: {error.message}</p>;
  return (
    <div className="w-screen h-screen md:overflow-x-hidden font-serif text-white">
      <div className=" min-h-full  bg-zinc-900 p-[.5rem] sm:p-[1rem]">
        <div className="w-full">
          <div className=" w-full flex gap-5 items-center">
            <div className="w-20">
              <div className="w-20 h-20 rounded-full bg-zinc-500"></div>
            </div>
            <div>
              <h2 className=" text-2xl font-semibold">User Name</h2>
              <p className="text-sm text-gray-400 mt-1">
                Example User - 20 Projects
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-zinc-600 mt-5"></div>
        <div className="w-full min-h-screen mt-5 overflow-hidden">
          <div className="w-full h-full  mb-4">
            <h1 className="text-[2rem] lg:text-[3vw] text-zinc-600 capitalize font-serif">
              Ongoing Work
            </h1>
            <div className=" w-full min-h-[25rem] lg:min-h-[30rem]  mt-4 overflow-hidden relative bg-[#2221211a] py-2 px-2">
              <div className="w-full flex gap-3  overflow-scroll">
                {users.map((item, i) => (
                  <div key={i} className=" h-full">
                    <div className="w-80 h-[22rem] md:w-96 md:h-[29rem]  bg-[#0005]  backdrop-blur-[20px] relative rounded-md">
                      <div className="min-w-full h-12 flex items-center justify-between px-[.5rem] py-[.2rem] md:px-[.8rem] md:py-[1rem]">
                        <div className="">
                          <Link to="/user-info">
                            <img
                              src={item.img}
                              alt="user-img"
                              className="w-10 h-10 rounded-full"
                            />
                          </Link>
                        </div>
                        <span className="mr-2 text-xl">
                          <h1>{item.username}</h1>
                        </span>
                      </div>

                      <div className="min-w-full">
                        <div className="w-full p-[.5rem]   rounded-lg">
                          <img
                            src={item.img}
                            alt="img"
                            className="object-cover md:h-[20rem]"
                          />
                        </div>
                      </div>

                      <div className="w-full mt-4 ">
                        <div className="px-3 flex justify-between">
                          <Link to="/user">
                            <button className="bg-blue-500 px-3 py-2 rounded-md w-[5rem]">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="bg-red-400 px-3 py-2 rounded-md w-[6rem]"
                            onClick={() => removecard(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-zinc-800 mt-5"></div>
          <div className="w-full h-full  mt-8 overflow-hidden">
            <h1 className="text-[3rem] lg:text-[3vw] text-zinc-600 capitalize font-serif">
              Past Work
            </h1>
            <div className=" w-full min-h-[25rem] lg:h-[30rem] flex mt-4 overflow-hidden relative bg-[#2221211a] py-2 px-2">
              <div className="w-full flex gap-3 md:gap-2 overflow-scroll">
                {users.map((item, i) => (
                  <div key={i} className="h-full">
                    <div className="w-80 h-[22rem] md:w-96 md:h-[29rem]  bg-[#0005]  backdrop-blur-[20px] relative rounded-md">
                      <div className="min-w-ful h-12 flex items-center justify-between px-[.5rem] py-[.2rem] md:px-[.8rem] md:py-[1rem]">
                        <div className="">
                          <Link to="/user-info">
                            <img
                              src={item.img}
                              alt="user-img"
                              className="w-10 h-10 rounded-full"
                            />
                          </Link>
                        </div>
                        <span className="mr-2 text-xl">
                          <h1>{item.username}</h1>
                        </span>
                      </div>

                      <div className="min-w-full">
                        <div className="w-full p-[.5rem]   rounded-lg">
                          <img
                            src={item.img}
                            alt="img"
                            className="object-cover md:h-[20rem]"
                          />
                        </div>
                      </div>

                      <div className="w-full mt-4 ">
                        <div className="px-3 flex justify-between">
                          <Link to="/user">
                            <button className="bg-blue-600 px-3 py-2 rounded-md w-[5rem]">
                              Edit
                            </button>
                          </Link>
                          <button
                            className="bg-red-400 px-3 py-2 rounded-md w-[6rem]"
                            onClick={() => removepastdata(item._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
