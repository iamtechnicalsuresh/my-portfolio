import nc from "next-connect";
import dbConnect from "../../../backend/config/db";
import {
  getContact,
  deleteContact,
} from "../../../backend/controllers/contactsController";
import onError from "../../../backend/middlewares/globalErrorHandler";

dbConnect();

const handler = nc({ onError });

handler.get(getContact).delete(deleteContact);

export default handler;
