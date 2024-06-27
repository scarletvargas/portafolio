interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  return (
    <div
      className={`${className} select-none flex flex-row justify-start items-center px-3 py-1 gap-1 w-auto bg-softblue100 rounded-full text-secondary text-sm`}
    >
      {children}
    </div>
  );
};
