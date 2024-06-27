import { Svg } from './Svg';

export const Vite: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1z' />
      <path d='M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5' />
    </Svg>
  );
};
