function ButtonPrimary({onClick, text}) {
  return (
    <button onClick={onClick} className="py-4 px-7 rounded-full cursor-pointer bg-primary dark:bg-secondary hover:bg-secondary dark:hover:bg-primary font-semibold text-white text-base/4">{text}</button>
  )
}

export default ButtonPrimary