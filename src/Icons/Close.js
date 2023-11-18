export const Close = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='stroke-secondary hover:stroke-primary dark:stroke-white dark:hover:stroke-primary'
      width={28}
      height={28}
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M18 6l-12 12'></path>
      <path d='M6 6l12 12'></path>
    </svg>
  );
};
