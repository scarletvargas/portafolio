interface CardSkillProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  width: string;
}

export const CardSkill: React.FC<CardSkillProps> = ({ title, description, icon: Icon, width }) => {
  return (
    <div
      className={`group flex flex-col items-start gap-6 p-10 bg-white100 dark:bg-secondary hover:bg-secondary dark:hover:bg-white100 rounded-5xl w-[330px] ${width} h-auto md:h-[410px] xl:h-[355px]`}
    >
      <div className='flex items-center justify-center w-[65px] h-[65px] bg-softblue100 dark:bg-primary group-hover:bg-primary dark:group-hover:bg-softblue100 rounded-4xl'>
        <Icon
          width={30}
          height={30}
          strokeWidth='1.5'
          className='stroke-primary dark:stroke-white group-hover:stroke-white dark:group-hover:stroke-primary'
        />
      </div>
      <h4 className='text-secondary dark:text-white group-hover:text-white dark:group-hover:text-secondary text-xl/6 lg:max-w-md font-bold'>
        {title}
      </h4>
      <p className='text-gray300 dark:text-white group-hover:text-white dark:group-hover:text-gray300 text-base/7 lg:max-w-md font-normal'>
        {description}
      </p>
    </div>
  );
};
