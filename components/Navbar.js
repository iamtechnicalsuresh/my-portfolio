import Link from "next/link";
import { useRouter } from "next/router";
import Styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={Styles.mainNav}>
      <div className={Styles.brandLogo}>
        <Link href="/">
          <a>
            <h1>LOGO</h1>
          </a>
        </Link>
      </div>
      <ul className={Styles.navItems}>
        <li className={Styles.navItem}>
          <Link href="/">
            <a
              className={
                router.pathname === "/"
                  ? `${Styles.navLink} ${Styles.active}`
                  : `${Styles.navLink}`
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className={Styles.navItem}>
          <Link href="/resume">
            <a
              className={
                router.pathname === "/resume"
                  ? `${Styles.navLink} ${Styles.active}`
                  : `${Styles.navLink}`
              }
            >
              Resume
            </a>
          </Link>
        </li>
        <li className={Styles.navItem}>
          <Link href="/portfolio">
            <a
              className={
                router.pathname === "/portfolio"
                  ? `${Styles.navLink} ${Styles.active}`
                  : `${Styles.navLink}`
              }
            >
              Portfolio
            </a>
          </Link>
        </li>
        <li className={Styles.navItem}>
          <Link href="/contact">
            <a
              className={
                router.pathname === "/contact"
                  ? `${Styles.navLink} ${Styles.active}`
                  : `${Styles.navLink}`
              }
            >
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
