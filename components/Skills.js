import Icons, {
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

const Skills = ({ skillsData }) => {
  const [element, control] = OnScrollAnimation();
  return (
    <section className="section mt-4" ref={element}>
      <TextHeading
        text="Skills"
        fontSize="2rem"
        margin="2rem"
        fontWeight="bold"
      />
      <motion.div
        className="grid grid-col-4 grid-gap-1"
        variants={zoomEffect}
        animate={control}
        transition={{ delay: 0.2, type: "tween" }}
      >
        {skillsData.map((skill) => (
          <Card key={skill.id}>
            {skill.icon}
            <div className="mx-2 mt-1 text-center">
              <TextHeading
                text={skill.title}
                fontSize="1.2rem"
                fontWeight="bold"
              />
              <TextDescription
                text={skill.description}
                fontSize="0.8rem"
                textAlign="center"
                lineHeight="25px"
              />
            </div>
          </Card>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
