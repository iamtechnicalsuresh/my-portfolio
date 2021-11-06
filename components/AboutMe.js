import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import TextHeading from "../components/TextHeading";
import TextDescription from "../components/TextDescription";
import OnScrollAnimation from "../components/OnScrollAnimation";
import { zoomEffect } from "../styles/Animations";

const AboutMe = ({ aboutMe }) => {
  const [element, control] = OnScrollAnimation();
  const [width, setWidth] = useState(false);

  useEffect(() => {
    if (innerWidth <= 550) {
      setWidth(true);
    }
  }, []);

  return (
    <section ref={element}>
      <TextHeading text="About Me" fontSize="2rem" margin="2rem" />
      <motion.div
        className="grid grid-col-1 grid-align-center mb-2"
        variants={zoomEffect}
        animate={control}
        transition={{ delay: 0.2, type: "tween" }}
      >
        <Card direction={width ? "column" : "row"}>
          <Image
            src={`/images/${aboutMe.image}`}
            width={700}
            height={700}
            className="border-radius"
          />
          <div className="p-3">
            <TextHeading text={aboutMe.fullname} fontSize="2.5rem" />
            <TextHeading text={aboutMe.designation} />
            <TextDescription text={aboutMe.description} textAlign="justify" />
            <TextDescription
              text={`Extra Skill : ${aboutMe.extraskills}`}
              fontSize="1rem"
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutMe;
