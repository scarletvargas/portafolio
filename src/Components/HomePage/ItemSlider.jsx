import Image from "next/image";
import ProjectOne from "@/assets/prueba.webp";
import ButtonPrimary from "../ButtonPrimary";

function ItemSlider({ isFirst, isLast }) {
  const imageClass = isFirst ? "rounded-l-5xl" : isLast ? "rounded-r-5xl" : "";
  return (
    <div className="relative flex flex-1 hover:flex-2 group w-[740px] xl:w-[1130px] h-[500px] duration-150 ease-in ">
      <div className="h-[500px] flex-col justify-center items-center">
        <Image
          src={ProjectOne}
          placeholder="blur"
          className={`grayscale h-full group-hover:grayscale-0 object-center object-cover ${imageClass}`}
        />
      </div>
      <div className="z-20 absolute h-full w-full hidden group-hover:flex flex-col items-center justify-center gap-[30px]">
        <p className="py-3 px-[22px] bg-white text-secondary text-[22px]/7 font-bold rounded-xl shadow-3xl">
          nombre del proyecto
        </p>
        <p className="py-2 px-3 bg-white text-secondary text-sm leading-[18px] font-normal rounded-xl shadow-3xl">
          Lorem ipsum dolor sit amet.
        </p>
        <ButtonPrimary text="Explore More" />
      </div>
    </div>
  );
}

export default ItemSlider;
