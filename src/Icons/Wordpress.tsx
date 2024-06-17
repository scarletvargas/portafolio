import { Svg } from './Svg';

export const Wordpress: React.FC<IconsProps> = (props) => {
  return (
    <Svg {...props}>
      <path d='M4 9h2.5'></path>
      <path d='M11 9l3 11l4 -9'></path>
      <path d='M5.5 9l3.5 11l3 -7'></path>
      <path d='M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z'></path>
      <path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
    </Svg>
  );
};
