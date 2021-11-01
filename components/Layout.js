import Head from "next/head";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Styles from "../styles/Layout.module.css";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
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
      <Navbar />
      <motion.main className={Styles.container} initial="hidden" animate="show">
        {children}
      </motion.main>
      <Footer />
    </>
  );
};

export default Layout;
