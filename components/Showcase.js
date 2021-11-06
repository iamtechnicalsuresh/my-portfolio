import Image from "next/image";
import { motion } from "framer-motion";
import TextHeading from "../components/TextHeading";
import SubTextHeading from "../components/SubTextHeading";
import LinkButton from "../components/LinkButton";
import MySocialIcons from "../components/MySocialIcons";
import Styles from "../styles/Showcase.module.css";

const Showcase = () => {
  return (
    <section className={Styles.showcase}>
      <div
        className={`grid grid-col-2 grid-align-center grid-justify-center grid-sm-col-1 ${Styles.showcaseContent}`}
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
            width={350}
            height={350}
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
          <SubTextHeading
            text="I'am Suresh Thapa"
            fontSize="2rem"
            fontWeight="bold"
            margin="1rem"
            color="green"
          />
          <TextHeading
            text="Network Engineer &"
            fontSize="2rem"
            fontWeight="bold"
            color="red"
          />
          <TextHeading
            text="Full Stack Developer"
            fontSize="2rem"
            fontWeight="bold"
            margin="1rem"
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
