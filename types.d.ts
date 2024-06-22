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

interface Project {
  name: string;
  description?: string;
  img: string;
  url: string;
}
