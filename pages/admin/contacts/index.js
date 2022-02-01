import React from "react";
import axios from "axios";
import LayoutAdmin from "../../../components/LayoutAdmin";
import Meta from "../../../components/Meta";
import TextHeading from "../../../components/TextHeading";

const contact = ({ data }) => {
  return (
    <LayoutAdmin>
      <Meta title="Contact Us" />
      <section className="section px-1 mt-3">
        <TextHeading text="Contact Us" fontWeight="bolder" />
        <h2>{data.contacts.map((contact) => contact.fullname)}</h2>
      </section>
    </LayoutAdmin>
  );
};

export default contact;

export async function getServerSideProps() {
  const url = process.env.SITE_URL;
  const { data } = await axios.get(`${url}/api/contacts`);

  return {
    props: { data },
  };
}
