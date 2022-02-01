import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import TextHeading from "../../components/TextHeading";
import TextInput from "../../components/TextInput";
import ErrorMessage from "../../components/ErrorMessage";
import { setStickyNav } from "../../redux/miscellaneous/navbarSlice";
import TextDescription from "../../components/TextDescription";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().required().label("First Name"),
  lastname: Yup.string().required().label("Last Name"),
  email: Yup.string().email().required().label("Email"),
  mobile: Yup.string().required().label("Mobile"),
  purpose: Yup.string().required().label("Purpose"),
  message: Yup.string().required().label("Message"),
});

const Login = () => {
  const dispatch = useDispatch();
  dispatch(setStickyNav(true));

  return (
    <Layout>
      <Meta title="Contact" />
      <section className="section">
        <div className="grid grid-col-3">
          <div></div>
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
            <TextHeading
              text="Sign In"
              fontSize="2rem"
              margin="2rem"
              fontWeight="bold"
            />
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => dispatch(postContacts(values))}
            >
              {({ values, handleSubmit, handleChange, errors, touched }) => (
                <form onSubmit={handleSubmit}>
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
                    title="Password"
                    name="password"
                    type="password"
                    placeHolder="Password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {<ErrorMessage message={errors.mobile} />}
                  <Button title="Submit" />
                  <Link href="/auth/register">
                    <a>
                      <TextDescription
                        text="Create New Account"
                        color="white"
                        fontSize="1.2rem"
                        textAlign="center"
                      />
                    </a>
                  </Link>
                </form>
              )}
            </Formik>
          </motion.div>
        </div>
        <div></div>
      </section>
    </Layout>
  );
};

export default Login;
