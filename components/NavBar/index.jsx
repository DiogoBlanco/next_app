import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/FIREFLY.webp";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/instagram.svg";
import whatsapp from "../../public/whatsapp.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-ul">
        <Link href={"/"}>
          <Image src={logo} className="logo" alt="firefly-logo"></Image>
        </Link>
        <Link className="nav-li" href={"/"}>
          HOME
        </Link>
        <Link className="nav-li" href={"/"}>
          SOBRE NÓS
        </Link>
        <Link className="nav-li" href={"/"}>
          SERVIÇOS
        </Link>
        <Link className="nav-li" href={"/contact"}>
          EQUIPE
        </Link>
        <Link className="nav-li" href={"/contact"}>
          ESTATÍSTICAS
        </Link>
        <Link className="nav-li" href={"/contact"}>
          CONTATO
        </Link>
        <Link href={"/"}><Image src={facebook} alt='facebook-logo'></Image></Link>
        <Link href={"/"}><Image src={instagram} alt='instagram-logo'></Image></Link>
        <Link href={"/"}><Image src={whatsapp} alt='whatsapp-logo'></Image></Link>
      </ul>
    </nav>
  );
}
