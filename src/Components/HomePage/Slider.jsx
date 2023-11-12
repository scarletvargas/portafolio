import ItemSlider from "./ItemSlider";

function Slider() {
  return (
    <div className="z-10 relative hidden md:flex flex-row w-[740px] xl:w-[1130px] h-[500px]">
      <ItemSlider isFirst />
      <ItemSlider />
      <ItemSlider isLast />
    </div>
  );
}

export default Slider;
