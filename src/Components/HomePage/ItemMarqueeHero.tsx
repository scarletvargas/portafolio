import { GetIcon } from '../GetIcon';

interface ItemMarqueeHeroProps {
  iconName: string;
}

export const ItemMarqueeHero: React.FC<ItemMarqueeHeroProps> = ({ iconName }) => {
  return (
    <div className='select-none flex flex-row justify-start items-center px-5 py-2 gap-2 w-auto bg-white100 rounded-lg'>
      <GetIcon
        icon={iconName}
        className='stroke-secondary'
        width={38}
        height={38}
        strokeWidth='1.5'
      />
      <p className='text-secondary text-xl'>{iconName}</p>
    </div>
  );
};
