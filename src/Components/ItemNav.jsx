import Link from "next/link";

function ItemNav({ nameItem, href }) {
  return (
    <li>
      <Link
        className="text-secondary hover:text-primary dark:text-white dark:hover:text-primary"
        href={href}
      >
        {nameItem}
      </Link>
    </li>
  );
}

export default ItemNav;
