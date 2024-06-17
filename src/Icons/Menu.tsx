import { Svg } from './Svg';

export const Menu: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M4 6l16 0'></path>
      <path d='M4 12l16 0'></path>
      <path d='M4 18l16 0'></path>
    </Svg>
  );
};
