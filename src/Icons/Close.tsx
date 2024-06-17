import { Svg } from './Svg';

export const Close: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M18 6l-12 12'></path>
      <path d='M6 6l12 12'></path>
    </Svg>
  );
};
