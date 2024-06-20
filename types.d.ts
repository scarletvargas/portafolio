interface IconsProps {
  className?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  additionalClasses?: string;
}