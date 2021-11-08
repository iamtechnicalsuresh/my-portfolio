import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setStickyNav } from "../redux/miscellaneous/navbarSlice";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import TextArea from "../components/TextArea";
import TextInput from "../components/TextInput";
import TextHeading from "../components/TextHeading";
import ErrorMessage from "../components/ErrorMessage";

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
  dispatch(setStickyNav(true));

  return (
    <Layout>
      <Meta title="Contact" />
      <section className="section">
        <TextHeading text="Contact Us" fontSize="2.5rem" margin="2rem" />
        <motion.div
          className="grid grid-col-2"
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
            onSubmit={(values) => console.log(values)}
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
      </section>
    </Layout>
  );
};

export default contact;
