import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Researchdropdown, Researchdropdown2 } from "../Data/Data";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import bpit from "../assets/bpit.png";
import axios from "axios";

const useDebouncedValue = (inputValue, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

const Navbar = () => {
  const [search, setsearch] = useState("");
  const [Researchdropdownopen, setResearchdropdown] = useState(false);
  const [Researchdropdownopen2, setResearchdropdown2] = useState(false);
  const [sidemenu, setsidemenu] = useState(false);
  const searchref = useRef();
  const [user, setuser] = useState(null);

  
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    window.location.href = "/";
  };

  const HandleResearchopen = () => {
    setResearchdropdown(!Researchdropdownopen);
    setResearchdropdown2(false);
  };

  const HandleResearchopen2 = () => {
    setResearchdropdown2(!Researchdropdownopen2);
    setResearchdropdown(false);
  };

  const debounce = useDebouncedValue(search, 300);

  const HandleSearchChange = (e) => {
    let result = e.target.value;
    setsearch(result);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".dropdown")) {
      setResearchdropdown(false);
      setResearchdropdown2(false);
      setsidemenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    //logic
  }, [debounce]);

  return (
    <div className="w-screen bg-white px-6 py-4">
      <div className="h-15 flex justify-between items-center text-black capitalize">
        {/* nav-left */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/">
            <img src={bpit} alt="bpit" className="hidden sm:block w-20" />
          </Link>
          {sidemenu && (
            <div className="absolute top-14 left-0 z-40 w-full bg-gray-100 shadow-lg md:hidden">
              <div className="px-4 py-4 ">
                <div className="relative mb-4  font-serif">
                  <Link to="/">
                    <h1 className="font-serif text-xl cursor-pointer">Home</h1>
                  </Link>
                </div>
                <div className="relative mb-4 dropdown">
                  <h1
                    className="font-serif text-xl cursor-pointer"
                    onClick={HandleResearchopen}
                  >
                    Research
                  </h1>
                  {Researchdropdownopen && (
                    <div className="absolute top-8 z-50  left-0 bg-gray-200 rounded-md w-full">
                      <ul className="py-2 px-4">
                        {Researchdropdown.map((item) => (
                          <li key={item.id} className="mt-2">
                            <Link to={item.to}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="relative mb-4 dropdown font-serif">
                  <h1
                    className="font-serif text-xl cursor-pointer"
                    onClick={HandleResearchopen2}
                  >
                    Publications
                  </h1>
                  {Researchdropdownopen2 && (
                    <div className="absolute top-8 left-0 z-10 bg-gray-200 rounded-md w-full">
                      <ul className="py-2 px-4">
                        {Researchdropdown2.map((item) => (
                          <li key={item.id} className="mt-2">
                            <Link to={item.to}>{item.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="flex flex-col relative mb-4 dropdown font-serif gap-2 md:gap-10 w-[50%] justify-end ">
                  <Link to="/user">
                    <h1 className="font-serif text-xl cursor-pointer">User</h1>
                  </Link>
                  <Link to="/login">
                    <h1 className="font-serif text-xl cursor-pointer">Login</h1>{" "}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className=" flex gap-20 items-center font-mono text-sm">
          <div className="hidden md:flex relative dropdown">
            <h1
              className="font-serif text-xl cursor-pointer"
              onClick={HandleResearchopen}
            >
              Research
            </h1>
            {Researchdropdownopen && (
              <div className="absolute top-10 left-0 z-10 bg-gray-200 rounded-md w-52">
                <ul className="py-2 px-4">
                  {Researchdropdown.map((item) => (
                    <li key={item.id} className="mt-2">
                      <Link to={item.to}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="hidden md:flex relative dropdown">
            <h1
              className="font-serif text-xl cursor-pointer"
              onClick={HandleResearchopen2}
            >
              Publications
            </h1>
            {Researchdropdownopen2 && (
              <div className="absolute top-10 left-0 z-10 bg-gray-200 rounded-md w-52">
                <ul className="py-2 px-4">
                  {Researchdropdown2.map((item) => (
                    <li key={item.id} className="mt-2">
                      <Link to={item.to}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="relative ">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={HandleSearchChange}
              ref={searchref}
              className="px-3 py-2 bg-gray-300 rounded-md w-52 md:w-64"
            />
            <span
              className="absolute top-2 right-2 text-gray-500 cursor-pointer text-xl "
              onClick={() => searchref.current.focus()}
            >
              <FiSearch />
            </span>
          </div>

          <span className="md:hidden  text-xl text-black ml-4 ">
            <RxHamburgerMenu
              onClick={() => setsidemenu(!sidemenu)}
              className="cursor-pointer dropdown"
            />
          </span>
        </div>

        <div className="hidden md:flex gap-4">
          <Link to="/user">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              User
            </button>
          </Link>
          <Link to="/login">
            <button
              // onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-2 rounded-full"
            >
              login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
