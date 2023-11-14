import Link from "next/link";

function ItemNav({ nameItem, href, onClick }) {
  return (
    <li>
      <Link
        className="text-secondary hover:text-primary dark:text-white dark:hover:text-primary"
        href={href}
        onClick={onClick}
      >
        {nameItem}
      </Link>
    </li>
  );
}

export default ItemNav;
