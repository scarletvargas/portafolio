import Link from 'next/link';

interface ItemNavProps {
  nameItem: string;
  href: string;
  onClick?: () => void;
}

export const ItemNav: React.FC<ItemNavProps> = ({ nameItem, href, onClick }) => {
  return (
    <li>
      <Link
        className='text-secondary hover:text-primary dark:text-white dark:hover:text-primary'
        href={href}
        onClick={onClick}
      >
        {nameItem}
      </Link>
    </li>
  );
};

