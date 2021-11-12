import { FaCode, FaPython, FaNodeJs, FaReact, FaNeos } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setStickyNav } from "../redux/miscellaneous/navbarSlice";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import TextHeading from "../components/TextHeading";
import TextDescription from "../components/TextDescription";
import Card from "../components/Card";
import LinkButton from "../components/LinkButton";
import Meta from "../components/Meta";

const portfolio = () => {
  const dispatch = useDispatch();
  dispatch(setStickyNav(true));

  return (
    <Layout>
      <Meta title="Portfolio" />
      <section className="section">
        <TextHeading text="MY PORTFOLIOS" color="#f8f4f4" fontWeight="bold" />
        <motion.div
          className="grid grid-col-4 grid-gap-1"
          initial={{ y: "700" }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1 }}
        >
          <Card>
            <FaPython size={80} color="white" />
            <div className="mx-1 mt-1 text-center">
              <TextHeading
                text="Python Network Automation"
                fontSize="1.2rem"
                fontWeight="bold"
              />
              <TextDescription
                text="Cisco and Juniper network Automation using Python Nornir and Netmiko."
                fontSize="0.8rem"
                textAlign="center"
                lineHeight="25px"
              />
            </div>
            <LinkButton
              href="https://github.com/iamtechnicalsuresh"
              title="Project"
            />
          </Card>
          <Card>
            <FaCode size={80} color="white" />
            <div className="mx-1 mt-1 text-center">
              <TextHeading
                text="Webside Design"
                fontSize="1.2rem"
                fontWeight="bold"
              />
              <TextDescription
                text="Web devlopment using HTML, CSS and Javascript."
                fontSize="0.8rem"
                textAlign="center"
                lineHeight="25px"
              />
            </div>
            <LinkButton
              href="https://github.com/iamtechnicalsuresh"
              title="Project"
            />
          </Card>
          <Card>
            <FaNodeJs size={80} color="white" />
            <div className="mx-1 mt-1 text-center">
              <TextHeading
                text="E-Commerce"
                fontSize="1.2rem"
                fontWeight="bold"
              />
              <TextDescription
                text="Full stack E-Commerce Website using (MongoDb, Express, React and NodeJs)."
                fontSize="0.8rem"
                textAlign="center"
                lineHeight="25px"
              />
            </div>
            <LinkButton
              href="https://github.com/iamtechnicalsuresh"
              title="Project"
            />
          </Card>
          <Card>
            <FaReact size={80} color="white" />
            <div className="mx-1 mt-1 text-center">
              <TextHeading
                text="Portfolio Website"
                fontSize="1.2rem"
                fontWeight="bold"
              />
              <TextDescription
                text="PortFolio website using NextJs."
                fontSize="0.8rem"
                textAlign="center"
                lineHeight="25px"
              />
            </div>
            <LinkButton
              href="https://github.com/iamtechnicalsuresh"
              title="Project"
            />
          </Card>
          <Card>
            <FaReact size={80} color="white" />
            <div className="mx-1 mt-1 text-center">
              <TextHeading
                text="Mobile App"
                fontSize="1.2rem"
                fontWeight="bold"
              />
              <TextDescription
                text="Mobile App using React Native."
                fontSize="0.8rem"
                textAlign="center"
                lineHeight="25px"
              />
            </div>
            <LinkButton
              href="https://github.com/iamtechnicalsuresh"
              title="Project"
            />
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default portfolio;
