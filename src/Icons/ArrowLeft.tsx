import { Svg } from './Svg';

export const ArrowLeft: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M15 6l-6 6l6 6' />
    </Svg>
  );
};
