import React from "react";

function ItemMarqueeHero({ text, iconSvg: Icon }) {
  return (
    <div className="flex flex-row justify-start items-center px-5 py-2 gap-2 w-auto bg-[#F4F4F6] rounded-lg">
      <Icon />
      <p className="text-secondary text-xl">{text}</p>
    </div>
  );
}

export default ItemMarqueeHero;
