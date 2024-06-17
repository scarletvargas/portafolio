import { Svg } from './Svg';

export const Figma: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
      <path d='M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z'></path>
      <path d='M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15'></path>
    </Svg>
  );
};
