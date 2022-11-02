import Link from "next/link";
import {useRouter} from "next/router"

export default function NavBar() {
  const router = useRouter();

  return (
    <div>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "blue": "black"}}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "blue": "black"}}>About</a>
      </Link>
    </div>
  )
}
