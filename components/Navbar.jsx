import "./Navbar.css"
import Link from "next/link"
import Logo from "./Logo"

export default function Navbar() {
  return <nav className="navbar">
    <ul className="nav-ul">
      <Logo/>
      <Link className="nav-li" href={"/"}>Home</Link>
      <Link className="nav-li" href={"/contact"}>Contato</Link>
      <li className="nav-li">Sobre</li>
      <li className="nav-li">Projetos</li>
    </ul>
  </nav>
}