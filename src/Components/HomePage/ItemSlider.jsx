import Image from "next/image";
import ButtonPrimary from "../ButtonPrimary";
import Link from "next/link";

function ItemSlider({
  index,
  isFirst,
  isLast,
  handleHover,
  isClasses,
  imgProject,
  nameProject,
  description,
  href,
}) {
  const imageClass = isFirst ? "rounded-l-5xl" : isLast ? "rounded-r-5xl" : "";
  return (
    <div
      className={`relative flex ${
        isClasses ? "flex-2" : "flex-1"
      } group w-[740px] xl:w-[1130px] h-[500px] duration-150 ease-in`}
      onMouseEnter={() => handleHover(index)}
    >
      <div className="h-[500px] flex-col justify-center items-center">
        <Image
          alt={nameProject}
          src={imgProject}
          placeholder="blur"
          className={`h-full ${
            isClasses ? "grayscale-0" : "grayscale"
          } object-center object-cover ${imageClass}`}
        />
      </div>
      <div className="z-20 absolute h-full w-full hidden group-hover:flex flex-col items-center justify-center gap-[30px] animate-fadeInY">
        <p className="py-3 px-[22px] bg-white text-secondary text-[22px]/7 font-bold rounded-xl shadow-3xl">
          {nameProject}
        </p>
        <p className="py-2 px-3 bg-white text-secondary text-sm leading-[18px] font-normal rounded-xl shadow-3xl">
          {description}
        </p>
        <Link href={href} target="_black">
          <ButtonPrimary text="Explore More" />
        </Link>
      </div>
    </div>
  );
}

export default ItemSlider;
