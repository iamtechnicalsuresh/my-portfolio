import Image from "next/image";
import { motion } from "framer-motion";
import Card from "../components/Card";
import TextHeading from "../components/TextHeading";
import TextDescription from "../components/TextDescription";
import OnScrollAnimation from "../components/OnScrollAnimation";
import { zoomEffect } from "../styles/Animations";

const AboutMe = () => {
  const [element, control] = OnScrollAnimation();

  return (
    <section ref={element}>
      <TextHeading text="About Me" fontSize="2rem" margin="2rem" />
      <motion.div
        className="grid grid-col-1 grid-align-center mb-2"
        variants={zoomEffect}
        animate={control}
        transition={{ delay: 0.2, type: "tween" }}
      >
        <Card direction="row">
          <Image
            src="/images/SureshThapa.jpg"
            width={700}
            height={700}
            className="border-radius"
          />
          <div className="p-3">
            <TextHeading text="Suresh Thapa" fontSize="2.5rem" />
            <TextHeading text="Network Engineer" />
            <TextDescription
              text="I am Cisco and Juniper network engineeer. Working knowledge in Cisco and Juniper switches and routers, Sonicwall Firewall, Server 2008 to 2016 (Active Directory, DNS, DHCP, Radius CA) and Network automation using Python Nornir and Netmiko."
              textAlign="justify"
            />
            <TextDescription
              text="Extra Skill : HTML, CSS, Javascript, NodeJS, ReactJS, NextJS, ExpressJS"
              fontSize="1rem"
            />
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutMe;
