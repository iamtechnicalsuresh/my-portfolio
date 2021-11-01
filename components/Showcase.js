import Image from "next/image";
import { motion } from "framer-motion";
import TextHeading from "../components/TextHeading";
import LinkButton from "../components/LinkButton";
import MySocialIcons from "../components/MySocialIcons";
import Styles from "../styles/Showcase.module.css";
import OnScrollAnimation from "../components/OnScrollAnimation";
import { zoomEffect, slidingLeft } from "../styles/Animations";

const Showcase = () => {
  return (
    <section className={Styles.showcase}>
      <div
        className={`grid grid-col-2 grid-align-center grid-justify-center ${Styles.showcaseContent}`}
      >
        <motion.div
          className="showcase-left"
          initial={{ x: "-100vw", scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            type: "spring",
            duration: 2,
            bounce: 0.3,
          }}
        >
          <Image
            src="/images/SureshThapa.jpg"
            className={Styles.image}
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          className="showcase-left"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            duration: 2,
            bounce: 0.3,
          }}
        >
          <TextHeading
            text="Hello"
            fontSize="2.5rem"
            fontWeight="bold"
            className="my-1"
          />
          <TextHeading
            text="I'am Suresh Thapa"
            fontSize="3rem"
            fontWeight="bold"
            margin="2rem"
            color="green"
          />
          <TextHeading
            text="Network Engineer &"
            fontSize="2.5rem"
            fontWeight="bold"
            color="red"
          />
          <TextHeading
            text="Full Stack Developer"
            fontSize="2.5rem"
            fontWeight="bold"
            margin="2rem"
            color="red"
          />
          <LinkButton
            href="/contact"
            title="Contact"
            btnType="Styles.btn_primary"
          />
        </motion.div>
        <MySocialIcons />
      </div>
    </section>
  );
};

export default Showcase;
