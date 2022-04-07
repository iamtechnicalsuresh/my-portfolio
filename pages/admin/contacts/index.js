import React from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import LayoutAdmin from "../../../components/LayoutAdmin";
import Meta from "../../../components/Meta";
import TextHeading from "../../../components/TextHeading";
import Styles from "../../../styles/contactAdmin.module.css";

const contact = ({ data }) => {
  const { contacts } = data;

  async function deleteContact(id) {
    await axios.delete(`http://localhost:3000/api/contacts/${id}`);
  }

  return (
    <LayoutAdmin>
      <Meta title="Contact Us" />
      <section className="section px-1 mt-3 width-100">
        <TextHeading text="Contact Us" fontWeight="bolder" />
        <table className={Styles.customers}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Purpose</th>
              <th>Message</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {contacts.map((contact) => (
            <tbody key={contact._id}>
              <tr>
                <td>{contact.firstname}</td>
                <td>{contact.lastname}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile}</td>
                <td>{contact.purpose}</td>
                <td>{contact.message}</td>
                <td>{<FaEdit size={20} color="green" />}</td>
                <td>
                  {
                    <FaTrash
                      size={20}
                      color="red"
                      onClick={() => deleteContact(contact._id)}
                    />
                  }
                </td>
              </tr>
            </tbody>
          ))}
        </table>
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
