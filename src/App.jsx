import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/routes/Home";
import Nav from "./components/Nav";
import Destination from "./components/routes/Destination";
import Crew from "./components/routes/Crew";
import Technology from "./components/routes/Technology";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
};

export default App;
