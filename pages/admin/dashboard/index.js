import React from "react";
import LayoutAdmin from "../../../components/LayoutAdmin";
import Meta from "../../../components/Meta";
import TextHeading from "../../../components/TextHeading";

const index = () => {
  return (
    <LayoutAdmin>
      <Meta title="Dashboard" />
      <section className="section px-1 mt-3">
        <TextHeading text="Dashboard" fontWeight="bolder" />
      </section>
    </LayoutAdmin>
  );
};

export default index;
