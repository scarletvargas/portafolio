function CardSkill({ title, description, iconSvg: Icon, width }) {
  return (
    <div className={`group flex flex-col items-start gap-6 p-10 bg-white100 hover:bg-secondary rounded-5xl w-[330px] ${width}`}>
      <div className="flex items-center justify-center w-[65px] h-[65px] bg-softblue100 group-hover:bg-primary rounded-4xl">
        <Icon />
      </div>
      <h4 className="text-secondary group-hover:text-white text-xl leading-5 lg:max-w-md font-bold">
        {title}
      </h4>
      <p className="text-gray300 group-hover:text-white text-base leading-7 lg:max-w-md font-normal">
        {description}
      </p>
    </div>
  );
}

export default CardSkill;
