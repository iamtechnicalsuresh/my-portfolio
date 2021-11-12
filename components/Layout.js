import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const navbar = useSelector((state) => state.navbar);
  const { themeSwitch } = navbar;

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main
        className={
          themeSwitch ? `${Styles.main} light-theme` : `${Styles.main}`
        }
      >
        <Navbar />
        <motion.div
          className={Styles.container}
          initial="hidden"
          animate="show"
        >
          {children}
        </motion.div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
