import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "blue": "black"}}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "blue": "black"}}>About</a>
      </Link>
    </nav>
  )
}
