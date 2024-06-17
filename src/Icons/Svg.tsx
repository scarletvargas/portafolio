interface SvgProps extends IconsProps {
  children: React.ReactNode;
}

export const Svg: React.FC<SvgProps> = ({
  className,
  width = 24,
  height = 24,
  strokeWidth = 2,
  children,
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      width={width}
      height={height}
      viewBox='0 0 24 24'
      strokeWidth={strokeWidth}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <>{children}</>
    </svg>
  );
};
