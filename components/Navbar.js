import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import Styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const navbar = useSelector((state) => state.navbar);
  const { stickyNav } = navbar;

  const router = useRouter();
  return (
    <nav
      className={
        stickyNav
          ? `${Styles.mainNav}`
          : `${Styles.mainNav} ${Styles.mainNavFixed}`
      }
    >
      <div className={Styles.brandLogo}>
        <Link href="/">
          <a>
            <Image src="/images/logo.png" width={200} height={50} />
          </a>
        </Link>
      </div>
      <ul
        className={
          click
            ? `${Styles.navItems} ${Styles.navItemsOpen}`
            : `${Styles.navItems}`
        }
      >
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
      <div className={Styles.toggle} onClick={() => setClick(!click)}>
        {click ? (
          <FaTimes size={30} color="white" />
        ) : (
          <FaBars size={30} color="white" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
