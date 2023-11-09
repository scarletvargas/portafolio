import Image from "next/image";
import ProjectOne from "@/assets/prueba.webp";

function Slider() {
  return (
    <div className="hidden md:flex flex-row w-[740px] xl:w-[1130px] h-[500px]">
      <Image
        src={ProjectOne}
        placeholder="blur"
        style={{ maxHeight: "100vh", objectFit: "cover" }}
        className="rounded-l-[26px] flex w-20 grow-0 hover:grow grayscale hover:grayscale-0 duration-150 ease-in object-center"
      />
      <Image
        src={ProjectOne}
        placeholder="blur"
        style={{ maxHeight: "100vh", objectFit: "cover" }}
        className="flex w-20 grow-0 hover:grow grayscale hover:grayscale-0 duration-150 ease-in object-center"
      />
      <Image
        src={ProjectOne}
        placeholder="blur"
        style={{ maxHeight: "100vh", objectFit: "cover" }}
        className="rounded-r-[26px] flex w-20 grow-0 hover:grow grayscale hover:grayscale-0 duration-150 ease-in object-center"
      />
    </div>
  );
}

export default Slider;
