export const ButtonPrimary: React.FC<ButtonProps> = ({ onClick, children, additionalClasses }) => {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-7 rounded-full cursor-pointer bg-primary dark:bg-secondary hover:bg-secondary dark:hover:bg-primary font-semibold text-white text-base/4 ${additionalClasses}`}
    >
      {children}
    </button>
  );
};
