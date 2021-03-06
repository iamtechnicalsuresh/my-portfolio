import nc from "next-connect";
import dbConnect from "../../../backend/config/db";
import {
  getContacts,
  createContacts,
  getContact,
} from "../../../backend/controllers/contactsController";
import onError from "../../../backend/middlewares/globalErrorHandler";

dbConnect();

const handler = nc({ onError });

handler.get(getContacts).post(createContacts);

export default handler;
