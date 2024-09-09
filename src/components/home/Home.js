import React from "react";
import Carousel from "./Carousel";
import Book from "./Book";
import About from "./About";
import Profile from "../home/About";
import Rooms from "./Rooms";
import Sliders from "./Slider";
import Teams from "./Team";

export default function Home() {
  return (
    <>
      <Carousel />
      <Book />
      <About />
      <Rooms />
      <Profile />
      <Sliders />
      <Teams />
    </>
  );
}
