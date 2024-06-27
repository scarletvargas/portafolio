export const ButtonSecond: React.FC<ButtonProps> = ({ onClick, children, additionalClasses }) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-7 rounded-full cursor-pointer bg-secondary dark:bg-primary hover:bg-primary dark:hover:bg-secondary font-semibold text-white text-base/4 ${additionalClasses}`}
    >
      {children}
    </button>
  );
};
