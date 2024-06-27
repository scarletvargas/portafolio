import { Svg } from './Svg';

export const ArrowDown: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M6 9l6 6l6 -6' />
    </Svg>
  );
};
