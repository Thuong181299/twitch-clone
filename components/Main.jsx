import React from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import IconBar from "./IconBar";
import LiveChannel from "./LiveChannel";

const Main = () => {
  return (
    <div className="absolute left-[64px] xl:left-[220px]">
      <Hero />
      <IconBar />
      <LiveChannel />
      <Categories />
    </div>
  );
};

export default Main;
