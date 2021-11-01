import Link from "next/link";
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Styles from "../styles/MySocialIcons.module.css";

const MySocialIcons = () => {
  return (
    <div className={Styles.socialIcons}>
      <a
        href="https://www.twitter.com/suresh99thapa"
        target="_blank"
        className={Styles.icon}
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.youtube.com/suresh99thapa"
        target="_blank"
        className={Styles.icon}
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/suresh99thapa"
        target="_blank"
        className={Styles.icon}
      >
        <FaInstagram />
      </a>
      <a href="https://youtube.com" target="_blank" className={Styles.icon}>
        <FaYoutube />
      </a>
    </div>
  );
};

export default MySocialIcons;
