import Image from "next/image";
import Link from "next/link";
import {
  FaColumns,
  FaUsers,
  FaAddressBook,
  FaSignOutAlt,
} from "react-icons/fa";
import TextHeading from "../components/TextHeading";
import Styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.logo}>
        <Image src="/images/logo.png" width={150} height={40} alt="Logo" />
      </div>
      <div className={Styles.profile_pic}>
        <Image
          src="/images/SureshThapa.jpg"
          width={200}
          height={200}
          objectFit="cover"
          className={Styles.profile_pic__image}
        />
        <TextHeading text="Suresh Thapa" />
      </div>
      <nav className={Styles.sidebar_navlinks}>
        <Link href="/admin/dashboard">
          <a className={Styles.sidebar_navlink}>
            <FaColumns />
            <p>Dashboard</p>
          </a>
        </Link>
        <Link href="/admin/users">
          <a className={Styles.sidebar_navlink}>
            <FaUsers />
            <p>Users</p>
          </a>
        </Link>
        <Link href="/admin/contacts">
          <a className={Styles.sidebar_navlink}>
            <FaAddressBook />
            <p>Contact</p>
          </a>
        </Link>
        <div className={Styles.sidebar_navlink}>
          <FaSignOutAlt />
          <p>Sign Out</p>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
