import { Svg } from './Svg';

export const NextJs: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993'></path>
      <path d='M15 12v-3'></path>
    </Svg>
  );
};
