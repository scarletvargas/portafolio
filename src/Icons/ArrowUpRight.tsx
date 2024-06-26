import { Svg } from './Svg';

export const ArrowUpRight: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d="M17 7l-10 10" />
      <path d="M8 7l9 0l0 9" />
    </Svg>
  );
};
