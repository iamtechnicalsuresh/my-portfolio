import { motion } from "framer-motion";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import ProgressBar from "../components/ProgressBar";
import TextHeading from "../components/TextHeading";
import Styles from "../styles/Home.module.css";

import OnScrollAnimation from "../components/OnScrollAnimation";
import { zoomEffect } from "../styles/Animations";
import Showcase from "../components/Showcase";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";

const Home = () => {
  const [element, control] = OnScrollAnimation();

  return (
    <Layout>
      <Meta title="Home" />
      <Showcase />
      <AboutMe />
      <Skills />

      <section className="section mt-4" ref={element}>
        <TextHeading text="Progress Level" fontSize="2rem" />
        <motion.div
          className="grid grid-col-2 grid-gap-1"
          // className="grid grid-col-4 grid-gap-1"
          variants={zoomEffect}
          animate={control}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Card>
            <TextHeading text="Network Engineer Skills" />
            <ProgressBar
              title="Juniper Routing Switching"
              width="70%"
              fontSize="1rem"
            />
            <ProgressBar
              title="Cisco Routing Switching"
              width="80%"
              fontSize="1rem"
            />
            <ProgressBar title="Ruckus Wireless" width="50%" fontSize="1rem" />
            <ProgressBar
              title="Sonicwall Firewall"
              width="60%"
              fontSize="1rem"
            />
            <ProgressBar title="Windows Server" width="60%" fontSize="1rem" />
            <ProgressBar title="Linux" width="40%" fontSize="1rem" />
          </Card>
          <Card>
            <TextHeading text="Programming Skills" />
            <ProgressBar title="HTML and CSS" width="80%" fontSize="1rem" />
            <ProgressBar title="Javascript" width="80%" fontSize="1rem" />
            <ProgressBar title="React Js" width="60%" fontSize="1rem" />
            <ProgressBar title="Next Js" width="60%" fontSize="1rem" />
            <ProgressBar title="Express Js" width="50%" fontSize="1rem" />
            <ProgressBar title="Python" width="40%" fontSize="1rem" />
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Home;
