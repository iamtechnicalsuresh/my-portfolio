import Link from "next/link";
import Styles from "../styles/LinkButton.module.css";

const LinkButton = ({ title, href }) => {
  return (
    <Link href={href}>
      <a className={`${Styles.button} ${Styles.btn_primary} "my-1" `}>
        {title}
      </a>
    </Link>
  );
};

export default LinkButton;
