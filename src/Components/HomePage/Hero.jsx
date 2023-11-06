function Hero() {
  return (
    <div className="py-[30px] md:py-[50px] xl:py-[70px] flex justify-center">
      <div className="text-secondary flex flex-col justify-center items-center gap-[30px] px-6 py-[30px] md:px-0 md:pt-0 md:pb-5 xl:max-w-7xl">
        <p className="text-xl leading-5 font-semibold">Hola! I am Scarlet,</p>
        <h1 className="text-center font-bold text-5xl leading-[3rem] md:text-8xl md:leading-[6rem] xl:text-[160px] xl:leading-[9rem]">
          Frontend Developer
        </h1>
      </div>
    </div>
  );
}

export default Hero;
