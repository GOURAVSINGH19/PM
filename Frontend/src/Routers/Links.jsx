import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Notfound from "../Component/Notfound";
import AddResearch from "../Component/AddResearch";
import Userprofile from "../Component/Userprofile/Userprofile";
import ResearchDetails from "../Component/AboutResearch/AboutResearch";
import Login from "../Component/Login/Login";
import Signup from "../Component/signup/Signup";
import Logout from "../Component/logout/Logout";
function Link() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AddResearch" element={<AddResearch />} />
      <Route path="/user" element={<Userprofile />}></Route>
      <Route path="/viewresearch" element={<ResearchDetails />}></Route>
      <Route path="/login" element={<Login />} />
      {/* <Route path="/logout" element={<Logout />} /> */}
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
}

export default Link;
