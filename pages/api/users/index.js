import nc from "next-connect";
import dbConnect from "../../../backend/config/db";
import { getUsers } from "../../../backend/controllers/usersController";
import onError from "../../../backend/middlewares/globalErrorHandler";

dbConnect();

const handler = nc({ onError });

handler.get(getUsers);

export default handler;
