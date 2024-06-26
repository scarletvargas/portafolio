import { Svg } from './Svg';

export const Server: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z' />
      <path d='M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z' />
      <path d='M7 8l0 .01' />
      <path d='M7 16l0 .01' />
    </Svg>
  );
};
