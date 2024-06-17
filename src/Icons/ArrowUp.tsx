import { Svg } from './Svg';

export const ArrowUp: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M12 5l0 14'></path>
      <path d='M18 11l-6 -6'></path>
      <path d='M6 11l6 -6'></path>
    </Svg>
  );
};
