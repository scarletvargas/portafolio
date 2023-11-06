function ButtonSecond({ onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="py-4 px-7 rounded-full cursor-pointer bg-secondary hover:bg-primary font-semibold text-white text-base leading-4"
    >
      {text}
    </button>
  );
}

export default ButtonSecond;
