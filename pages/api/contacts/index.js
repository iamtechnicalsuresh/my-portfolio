import nc from "next-connect";
import dbConnect from "../../../backend/config/db";
import {
  getContacts,
  createContacts,
  getContact,
} from "../../../backend/controllers/contactsController";

dbConnect();

const handler = nc({ attachParams: true });

handler.get(getContacts).post(createContacts).get(":id", getContact);

// nc.get(getContacts);
// nc.post(createContacts);

export default handler;
