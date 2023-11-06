import Image from "next/image";

export const CardSkill = () => {
  return (
    <div className="flex flex-col items-start gap-6 p-10 bg-[#F4F4F6]">
      <div className="flex items-center justify-center p-"><Image /></div>
      <h4 className="text-secondary text-xl leading-5 lg:max-w-md">{title}</h4>
      <p className="text-gray300 text-base leading-7 lg:max-w-md font-normal">{description}</p>
    </div>
  );
};
