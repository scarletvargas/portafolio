function ButtonSecond({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="py-4 px-7 rounded-full cursor-pointer bg-secondary dark:bg-primary hover:bg-primary dark:hover:bg-secondary font-semibold text-white text-base/4"
    >
      {text}
    </button>
  );
}

export default ButtonSecond;
