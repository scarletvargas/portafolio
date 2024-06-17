import { Svg } from './Svg';

export const Instagram: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z'></path>
      <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
      <path d='M16.5 7.5l0 .01'></path>
    </Svg>
  );
};
