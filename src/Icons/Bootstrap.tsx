import { Svg } from './Svg';

export const Bootstrap: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2'></path>
      <path d='M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2'></path>
      <path d='M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z'></path>
    </Svg>
  );
};
