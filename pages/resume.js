import Image from "next/image";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobeAsia,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaAssistiveListeningSystems,
  FaCode,
  FaGuitar,
  FaCamera,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import TextHeading from "../components/TextHeading";
import TextDescription from "../components/TextDescription";
import ProgressBar from "../components/ProgressBar";
import Styles from "../styles/resume.module.css";

const resume = () => {
  return (
    <Layout>
      <Meta title="Resume" />
      <section className="section">
        <div className={`grid ${Styles.grid_col_15rem}`}>
          <motion.div
            className={Styles.leftSide}
            initial={{ y: "-100vw" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
            }}
          >
            <Image
              src="/images/SureshThapa.jpg"
              width={300}
              height={300}
              className="rounded-radius"
            />
            <div className={Styles.details}>
              <TextHeading text="Suresh Thapa" />
              <TextDescription text="Network Engineer" />
              <TextDescription
                text="& Full Stack Web Developer"
                fontWeight="normal"
              />
            </div>
            <div className={Styles.contactInfo}>
              <TextHeading text="Contact Info" />
              <div className={Styles.contactInfo__content}>
                <FaPhoneAlt size={20} color="white" />
                <TextDescription
                  text="8877996655"
                  fontSize="1rem"
                  fontWeight="normal"
                />
              </div>
              <div className={Styles.contactInfo__content}>
                <FaEnvelope size={20} color="white" />
                <TextDescription
                  text="suresh@gmail.com"
                  fontSize="1rem"
                  fontWeight="normal"
                />
              </div>
              <div className={Styles.contactInfo__content}>
                <FaGlobeAsia size={20} color="white" />
                <TextDescription
                  text="www.mywebsite.com"
                  fontSize="1rem"
                  fontWeight="normal"
                />
              </div>
              <div className={Styles.contactInfo__content}>
                <FaLinkedinIn size={20} color="white" />
                <TextDescription
                  text="@suresh99thapa"
                  fontSize="1rem"
                  fontWeight="normal"
                />
              </div>
              <div className={Styles.contactInfo__content}>
                <FaMapMarkedAlt size={20} color="white" />
                <TextDescription
                  text="Delhi"
                  fontSize="1rem"
                  fontWeight="normal"
                />
              </div>
            </div>
            <div className={Styles.educationInfo}>
              <TextHeading text="Education" margin="1rem" />
              <div className={Styles.educationInfo__content}>
                <TextDescription
                  text="2014"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="blue"
                  lineHeight="15px"
                />
                <TextHeading
                  text="Bachelor Degree in Computer Science"
                  fontSize="1rem"
                  lineHeight="20px"
                />
                <TextDescription
                  text="MGU University"
                  fontSize="1rem"
                  fontWeight="normal"
                  lineHeight="10px"
                />
              </div>
              <div className={Styles.educationInfo__content}>
                <TextDescription
                  text="2011"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="blue"
                  lineHeight="15px"
                />
                <TextHeading
                  text="12th from CBSE Board"
                  fontSize="1rem"
                  lineHeight="20px"
                />
                <TextDescription
                  text="CBSE Board"
                  fontSize="1rem"
                  fontWeight="normal"
                  lineHeight="10px"
                />
              </div>
              <div className={Styles.educationInfo__content}>
                <TextDescription
                  text="2008"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="blue"
                  lineHeight="15px"
                />
                <TextHeading
                  text="10th from CBSE Board"
                  fontSize="1rem"
                  lineHeight="20px"
                />
                <TextDescription
                  text="CBSE Board"
                  fontSize="1rem"
                  fontWeight="normal"
                  lineHeight="10px"
                />
              </div>
            </div>
            <div className={`${Styles.languagesInfo}`}>
              <TextHeading text="Languages" />
              <ProgressBar width="60%" title="English" fontSize="1rem" />
              <ProgressBar width="80%" title="Hindi" fontSize="1rem" />
            </div>
          </motion.div>
          <motion.div
            className={Styles.rightSide}
            initial={{ y: "100vw" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
            }}
          >
            <div>
              <TextHeading text="PROFILE" color="#082032" />
              <TextDescription
                text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                color="#333"
                lineHeight="30px"
              />
            </div>
            <div className={`${Styles.exprience} mt-3`}>
              <TextHeading text="EXPERIENCE" color="#082032" />
              <div className={Styles.exprience__content}>
                <div className={Styles.exprience__content_left}>
                  <TextHeading
                    text="2012 - PRESENT"
                    color="#333"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                  <TextHeading
                    text="THE MANN SCHOOL"
                    color="#333"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                </div>
                <div className={Styles.exprience__content_right}>
                  <TextHeading
                    text="NETWORK ENGINEER"
                    color="#082032"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                  <TextDescription
                    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
                    color="#333"
                    lineHeight="20px"
                    fontWeight="normal"
                  />
                </div>
              </div>
              <div className={Styles.exprience__content}>
                <div className={Styles.exprience__content_left}>
                  <TextHeading
                    text="2011 - 2012"
                    color="#333"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                  <TextHeading
                    text="INTRACTIVE 12"
                    color="#333"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                </div>
                <div className={Styles.exprience__content_right}>
                  <TextHeading
                    text="NETWORK ENGINEER"
                    color="#082032"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                  <TextDescription
                    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
                    color="#333"
                    lineHeight="20px"
                    fontWeight="normal"
                  />
                </div>
              </div>
              <div className={Styles.exprience__content}>
                <div className={Styles.exprience__content_left}>
                  <TextHeading
                    text="2010 - 2011"
                    color="#333"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                  <TextHeading
                    text="NEXUS Computers"
                    color="#333"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                </div>
                <div className={Styles.exprience__content_right}>
                  <TextHeading
                    text="DESKTOP SUPPORT ENGINEER"
                    color="#082032"
                    fontSize="1rem"
                    lineHeight="20px"
                  />
                  <TextDescription
                    text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum"
                    color="#333"
                    lineHeight="20px"
                    fontWeight="normal"
                  />
                </div>
              </div>
            </div>
            <div className={`mt-3`}>
              <TextHeading text="PROFESSIONAL SKILLS" color="#082032" />
              <ProgressBar
                title="CSS3"
                width="70%"
                color="#333"
                fontSize="1rem"
              />
              <ProgressBar
                title="Javascript"
                width="60%"
                color="#333"
                fontSize="1rem"
              />
              <ProgressBar
                title="React JS"
                width="60%"
                color="#333"
                fontSize="1rem"
              />
              <ProgressBar
                title="Next JS"
                width="60%"
                color="#333"
                fontSize="1rem"
              />
              <ProgressBar
                title="Express JS"
                width="50%"
                color="#333"
                fontSize="1rem"
              />
              <ProgressBar
                title="Python"
                width="40%"
                color="#333"
                fontSize="1rem"
              />
            </div>
            <div className={`${Styles.hobbies} mt-3`}>
              <div>
                <TextHeading text="HOBBIES" color="#082032" />
              </div>
              <div className={Styles.hobbies__contents}>
                <div className={Styles.hobbies__content}>
                  <FaAssistiveListeningSystems size={20} color="#082032" />{" "}
                  <TextDescription text="Listening Song" color="#333" />
                </div>
                <div className={Styles.hobbies__content}>
                  <FaCode size={20} color="#082032" />{" "}
                  <TextDescription text="Coding" color="#333" />
                </div>
                <div className={Styles.hobbies__content}>
                  <FaCamera size={20} color="#082032" />{" "}
                  <TextDescription text="Watching Movies" color="#333" />
                </div>
                <div className={Styles.hobbies__content}>
                  <FaGuitar size={20} color="#082032" />{" "}
                  <TextDescription text="Playing Guitar" color="#333" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default resume;
