interface ItemMarqueeHeroProps {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const ItemMarqueeHero: React.FC<ItemMarqueeHeroProps> = ({ title, icon: Icon }) => {
  return (
    <div className='select-none flex flex-row justify-start items-center px-5 py-2 gap-2 w-auto bg-white100 rounded-lg'>
      <Icon className='stroke-secondary' width={38} height={38} strokeWidth='1.5' />
      <p className='text-secondary text-xl'>{title}</p>
    </div>
  );
};
