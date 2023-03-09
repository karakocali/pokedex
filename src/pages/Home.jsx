import React from "react";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>PokeDex</h1>
      <Outlet />
      footer
    </>
  );
};

export default Home;
