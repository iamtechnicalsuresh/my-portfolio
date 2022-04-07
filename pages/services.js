import React from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import { setStickyNav } from "../redux/miscellaneous/navbarSlice";
import TextHeading from "../components/TextHeading";

const services = () => {
  const dispatch = useDispatch();
  dispatch(setStickyNav(true));

  return (
    <Layout>
      <Meta title="Services" />
      <section className="section">
        <TextHeading text="SERVICE WE PROVIDE" />
      </section>
    </Layout>
  );
};

export default services;
