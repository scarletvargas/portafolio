import Slider from "./Slider";

function SectionProjects() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-2.5 pt-[60px] pb-[30px] md:py-[50px] xl:pt-[70px] justify-center items-center"
    >
      <div className="max-w-[360px] md:max-w-full flex flex-col gap-5 md:pb-[30px]">
        <p className="text-center font-bold text-sm leading-[14px] text-primary">
          FEATURED WORK
        </p>
        <h3 className="text-secondary font-bold text-center text-[28px] md:text-[30px] xl:text-[36px] leading-[38px] md:leading-10 xl:leading-[46px] max-w-[500px]">
          I've Contributed Efforts to Achieve Bigger Results
        </h3>
      </div>
      <Slider />
    </section>
  );
}

export default SectionProjects;
