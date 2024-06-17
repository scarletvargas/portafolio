import { Svg } from './Svg';

export const ArrowRight: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M9 6l6 6l-6 6' />
    </Svg>
  );
};
