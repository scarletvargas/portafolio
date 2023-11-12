import Link from "next/link";
import ButtonSecond from "./ButtonSecond";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-7 text-secondary">
      <Link href="/">
        <p className="text-xl/5 font-extrabold">DevScar</p>
      </Link>
      <ul className="hidden sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-5 md:gap-7 font-medium text-base/4">
        <li>
          <Link className="hover:text-primary" href="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-primary" href="/#skills">Skills</Link>
        </li>
        <li>
          <Link className="hover:text-primary" href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">
            <ButtonSecond text="Contact" />
          </Link>
        </li>
      </ul>
      <button className="block sm:hidden">hola</button>
    </nav>
  );
}

export default Navbar;
