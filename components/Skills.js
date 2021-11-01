import {
  FaWifi,
  FaCode,
  FaPython,
  FaNodeJs,
  FaReact,
  FaNeos,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Card from "../components/Card";
import TextHeading from "../components/TextHeading";
import TextDescription from "../components/TextDescription";
import OnScrollAnimation from "../components/OnScrollAnimation";
import { zoomEffect } from "../styles/Animations";

const Skills = () => {
  const [element, control] = OnScrollAnimation();
  return (
    <section className="section mt-4" ref={element}>
      <TextHeading text="Skills" fontSize="2rem" margin="2rem" />
      <motion.div
        className="grid grid-col-4 grid-gap-1"
        variants={zoomEffect}
        animate={control}
        transition={{ delay: 0.2, type: "tween" }}
      >
        <Card>
          <FaWifi size={80} color="white" />
          <div className="mx-3 mt-1 text-center">
            <TextHeading text="Network Engineer" fontSize="1.2rem" />
            <TextDescription
              text="Cisco and Juniper network experience. More than 10 years of experience in networking."
              fontSize="0.8rem"
              textAlign="center"
              lineHeight="25px"
            />
          </div>
        </Card>
        <Card>
          <FaCode size={80} color="white" />
          <div className="mx-3 mt-1 text-center">
            <TextHeading text="Web Developer" fontSize="1.2rem" />
            <TextDescription
              text="Web devlopment using HTML, CSS and Javascript."
              fontSize="0.8rem"
              textAlign="center"
              lineHeight="25px"
            />
          </div>
        </Card>
        <Card>
          <FaNodeJs size={80} color="white" />
          <div className="mx-3 mt-1 text-center">
            <TextHeading text="Node Js" fontSize="1.2rem" />
            <TextDescription
              text="Full stack web devlopment using NodeJS Frameworks like MERN (MongoDb, Express, React and NodeJs)."
              fontSize="0.8rem"
              textAlign="center"
              lineHeight="25px"
            />
          </div>
        </Card>
        <Card>
          <FaReact size={80} color="white" />
          <div className="mx-3 mt-1 text-center">
            <TextHeading text="React Js" fontSize="1.2rem" />
            <TextDescription
              text="Modern and Fully Dynamic website using React JS NodeJs Framework, with or without API."
              fontSize="0.8rem"
              textAlign="center"
              lineHeight="25px"
            />
          </div>
        </Card>
        <Card>
          <FaNeos size={80} color="white" />
          <div className="mx-3 mt-1 text-center">
            <TextHeading text="Next Js" fontSize="1.2rem" />
            <TextDescription
              text="Modern and Fully Dynamic website using Next JS NodeJs Framework, with or without API."
              fontSize="0.8rem"
              textAlign="center"
              lineHeight="25px"
            />
          </div>
        </Card>
        <Card>
          <FaReact size={80} color="white" />
          <div className="mx-3 mt-1 text-center">
            <TextHeading text="React Native" fontSize="1.2rem" />
            <TextDescription
              text="Mobile App with React Native Framework."
              fontSize="0.8rem"
              textAlign="center"
              lineHeight="25px"
            />
          </div>
        </Card>
        <Card>
          <FaPython size={80} color="white" />
          <div className="mx-3 mt-1 text-center">
            <TextHeading text="Python Programmer" fontSize="1.2rem" />
            <TextDescription
              text="Network Automation using Nornir, Netmiko and Scripli. Web devlopment using Django framework."
              fontSize="0.8rem"
              textAlign="center"
              lineHeight="25px"
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default Skills;
