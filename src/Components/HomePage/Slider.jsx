"use client";
import React, { useState } from "react";
import ItemSlider from "./ItemSlider";
import Psichomatch from "@/assets/psichomatch.png";
import DevScarlet from "@/assets/devscarlet.png";

function Slider() {
  const [hoveredItem, setHoveredItem] = useState(0);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  return (
    <div className="hidden md:flex flex-row w-[740px] xl:w-[1130px] h-[500px]">
      <ItemSlider
        index={0}
        isFirst
        handleHover={handleHover}
        isClasses={hoveredItem === 0}
        imgProject={Psichomatch}
        nameProject="PsichoMATCH"
        description="Application to schedule psychological appointments"
        href="https://psichomatch-xrad.vercel.app/"
      />
      <ItemSlider
        index={1}
        handleHover={handleHover}
        isClasses={hoveredItem === 1}
        imgProject={DevScarlet}
        nameProject="DevScarlet - Frontend Developer"
        description="Dev Scarlet's personal portfolio website"
        href="/"
      />
      <ItemSlider
        index={2}
        isLast
        handleHover={handleHover}
        isClasses={hoveredItem === 2}
        imgProject={Psichomatch}
        nameProject="PsichoMATCH"
        description="Application to schedule psychological appointments"
        href="https://psichomatch-xrad.vercel.app/"
      />
    </div>
  );
}

export default Slider;
