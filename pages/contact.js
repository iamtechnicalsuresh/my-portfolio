import { useEffect } from "react";
import { useRouter } from "next/router";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaUser, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setStickyNav } from "../redux/miscellaneous/navbarSlice";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import TextHeading from "../components/TextHeading";
import TextDescription from "../components/TextDescription";
import ErrorMessage from "../components/ErrorMessage";
import Card from "../components/Card";

import { postContacts, clearError } from "../redux/contactSlices/contactSlices";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  email: Yup.string().email().required().label("Email"),
  mobile: Yup.string().required().label("Mobile"),
  purpose: Yup.string().required().label("Purpose"),
  message: Yup.string().required().label("Message"),
});

const contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const { success, error } = contacts;
  const router = useRouter();

  dispatch(setStickyNav(true));

  useEffect(() => {
    if (success) {
      toast.success("We will contact you soon.");
      router.push("/");
    }

    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [success]);

  return (
    <Layout>
      <Meta title="Contact" />
      <section className="section">
        <TextHeading
          text="CONTACT US"
          fontSize="2rem"
          margin="2rem"
          fontWeight="bold"
        />
        <div className="grid grid-col-2 gap-2">
          <motion.div
            className="shadow p-2 border-radius"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
            }}
          >
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                mobile: "",
                purpose: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => dispatch(postContacts(values))}
            >
              {({ values, handleSubmit, handleChange, errors, touched }) => (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-col-2 grid-gap-1">
                    <div>
                      <TextInput
                        title="First Name"
                        name="firstname"
                        type="text"
                        placeHolder="First Name"
                        value={values.firstname}
                        onChange={handleChange}
                      />
                      {<ErrorMessage message={errors.firstname} />}
                    </div>
                    <div>
                      <TextInput
                        title="Last Name"
                        name="lastname"
                        type="text"
                        placeHolder="Last Name"
                        value={values.lastname}
                        onChange={handleChange}
                      />
                      {<ErrorMessage message={errors.lastname} />}
                    </div>
                  </div>
                  <TextInput
                    title="Email"
                    name="email"
                    type="email"
                    placeHolder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                  />
                  {<ErrorMessage message={errors.email} />}
                  <TextInput
                    title="Mobile"
                    name="mobile"
                    type="text"
                    placeHolder="Mobile"
                    value={values.mobile}
                    onChange={handleChange}
                  />
                  {<ErrorMessage message={errors.mobile} />}
                  <TextInput
                    title="Purpose"
                    name="purpose"
                    type="text"
                    placeHolder="Purpose"
                    value={values.purpose}
                    onChange={handleChange}
                  />
                  {<ErrorMessage message={errors.purpose} />}
                  <TextArea
                    title="Message"
                    name="message"
                    placeHolder="Your Message....."
                    value={values.message}
                    onChange={handleChange}
                  />
                  {<ErrorMessage message={errors.message} />}
                  <Button title="Submit" />
                </form>
              )}
            </Formik>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              duration: 2,
              bounce: 0.3,
            }}
          >
            <TextHeading text="CONTACT INFORMATION" fontWeight="bold" />
            <Card>
              <div className="flex flex-align-item-center grid-gap-1 width-100 px-1">
                <FaUser size={20} color="white" />
                <TextHeading
                  text="Suresh Thapa"
                  color="white"
                  fontWeight="normal"
                  fontSize="1.2rem"
                  lineHeight="20px"
                />
              </div>
              <div className="flex flex-align-item-center grid-gap-1 width-100 px-1">
                <FaPhoneAlt size={20} color="white" />
                <TextHeading
                  text="8899774455"
                  color="white"
                  fontWeight="normal"
                  fontSize="1.2rem"
                  lineHeight="20px"
                />
              </div>
              <div className="flex flex-align-item-center grid-gap-1 width-100 px-1">
                <FaEnvelope size={20} color="white" />
                <TextDescription
                  text="iamtechnicalsuresh@gmail.com"
                  color="white"
                  fontWeight="normal"
                  fontSize="0.8rem"
                  lineHeight="20px"
                />
              </div>
              <div className="flex flex-align-item-center grid-gap-1 width-100 px-1">
                <FaMapMarkedAlt size={20} color="white" />
                <TextHeading
                  text="New Delhi, India"
                  color="white"
                  fontWeight="normal"
                  fontSize="1.2rem"
                  lineHeight="20px"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default contact;
