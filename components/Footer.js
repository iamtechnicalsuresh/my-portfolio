import Styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={Styles.allRightReserved}>
        <p className={Styles.allRightReserved__text}>
          All Rights Reserved &copy; Suresh Thapa
        </p>
      </div>
    </footer>
  );
};

export default Footer;
