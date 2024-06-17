import { Svg } from './Svg';

export const Versions: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M10 5m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z'></path>
      <path d='M7 7l0 10'></path>
      <path d='M4 8l0 8'></path>
    </Svg>
  );
};
