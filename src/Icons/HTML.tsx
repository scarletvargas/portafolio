import { Svg } from './Svg';

export const HTML: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z'></path>
      <path d='M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5'></path>
    </Svg>
  );
};
