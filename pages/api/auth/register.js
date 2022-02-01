import nc from "next-connect";
import dbConnect from "../../../backend/config/db";
import { register } from "../../../backend/controllers/usersController";
import onError from "../../../backend/middlewares/globalErrorHandler";

dbConnect();

const handler = nc({ onError });

handler.post(register);

export default handler;
