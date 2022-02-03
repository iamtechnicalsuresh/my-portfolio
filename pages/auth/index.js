import React, { useEffect } from "react";
import Link from "next/link";
import { signIn, getSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import TextHeading from "../../components/TextHeading";
import TextInput from "../../components/TextInput";
import ErrorMessage from "../../components/ErrorMessage";
import { setStickyNav } from "../../redux/miscellaneous/navbarSlice";
import TextDescription from "../../components/TextDescription";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("password"),
});

const Login = () => {
  const dispatch = useDispatch();
  dispatch(setStickyNav(true));

  const submitHandler = async (values) => {
    const { email, password } = values;

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = "/admin/dashboard";
    }
  };

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
              onSubmit={(values) => submitHandler(values)}
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

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
