function ButtonPrimary({onClick, text}) {
  return (
    <button onClick={onClick} className="py-4 px-7 rounded-full cursor-pointer bg-primary hover:bg-secondary font-semibold text-white text-base leading-4">{text}</button>
  )
}

export default ButtonPrimary