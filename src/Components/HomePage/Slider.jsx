'use client'
import React, { useState } from "react";
import ItemSlider from "./ItemSlider";
import ProjectTest from "@/assets/prueba.webp";


function Slider() {
  const [hoveredItem, setHoveredItem] = useState(0);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  return (
    <div className="hidden md:flex flex-row w-[740px] xl:w-[1130px] h-[500px]">
      <ItemSlider index={0} isFirst handleHover={handleHover} isClasses={hoveredItem === 0} imgProject={ProjectTest} nameProject="Name Project" description="This is a brief description"/>
      <ItemSlider index={1} handleHover={handleHover} isClasses={hoveredItem === 1} imgProject={ProjectTest} nameProject="Name Project" description="This is a brief description"/>
      <ItemSlider index={2} isLast handleHover={handleHover} isClasses={hoveredItem === 2} imgProject={ProjectTest} nameProject="Name Project" description="This is a brief description"/>
    </div>
  );
}

export default Slider;
