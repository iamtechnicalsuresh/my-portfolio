import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Styles from "../styles/Layout.module.css";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const navbar = useSelector((state) => state.navbar);
  const { themeSwitch } = navbar;

  return (
    <main
      className={themeSwitch ? `${Styles.main} light-theme` : `${Styles.main}`}
    >
      <Navbar />
      <motion.div className={Styles.container} initial="hidden" animate="show">
        {children}
      </motion.div>
      <ToastContainer position="top-center" />
      <Footer />
    </main>
  );
};

export default Layout;
