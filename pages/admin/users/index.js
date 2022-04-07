import React from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import LayoutAdmin from "../../../components/LayoutAdmin";
import Meta from "../../../components/Meta";
import TextHeading from "../../../components/TextHeading";
import Styles from "../../../styles/contactAdmin.module.css";

const Users = ({ data }) => {
  const { users } = data;

  async function deleteContact(id) {
    await axios.delete(`http://localhost:3000/api/contacts/${id}`);
  }

  return (
    <LayoutAdmin>
      <Meta title="Users" />
      <section className="section px-1 mt-3 width-100">
        <TextHeading text="Contact Us" fontWeight="bolder" />
        <table className={Styles.customers}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Profile Pic</th>
              <th>Role</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((user) => (
            <tbody key={user._id}>
              <tr>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.profilePic}</td>
                <td>{user.isAdmin}</td>
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

export default Users;

export async function getServerSideProps() {
  const url = process.env.SITE_URL;
  const { data } = await axios.get(`${url}/api/users`);

  return {
    props: { data },
  };
}
