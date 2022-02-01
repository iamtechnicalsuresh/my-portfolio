import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Styles from "../styles/LayoutAdmin.module.css";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const navbar = useSelector((state) => state.navbar);
  const { themeSwitch } = navbar;

  return (
    <main
      className={themeSwitch ? `${Styles.main} light-theme` : `${Styles.main}`}
    >
      <motion.div className={Styles.container} initial="hidden" animate="show">
        <Sidebar />
        {children}
      </motion.div>
      <ToastContainer position="top-center" />
      <Footer />
    </main>
  );
};

export default Layout;
