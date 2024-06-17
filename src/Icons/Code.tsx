import { Svg } from './Svg';

export const Code: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M7 8l-4 4l4 4'></path>
      <path d='M17 8l4 4l-4 4'></path>
      <path d='M14 4l-4 16'></path>
    </Svg>
  );
};
