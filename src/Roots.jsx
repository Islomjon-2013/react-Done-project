import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Rigester from "./components/Rigester";
import See from "./components/See";

const Roots = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/see/:id" element={<See />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rigester" element={<Rigester />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Roots;
