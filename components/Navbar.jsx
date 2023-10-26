import "./Navbar.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <Link className="logo" href={"/"}>
          <p>FIRE</p>
        </Link>
        <Link className="nav-li" href={"/"}>
          Home
        </Link>
        <Link className="nav-li" href={"/"}>
          Sobre
        </Link>
        <Link className="nav-li" href={"/"}>
          Soluções
        </Link>
        <Link className="nav-li" href={"/contact"}>
          Contato
        </Link>
      </ul>
    </nav>
  );
}
