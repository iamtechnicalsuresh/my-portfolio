import catchAsyncHandler from "../middlewares/catchAsyncHandler";
import CustomErrorHandler from "../utils/customErrorHandler";
import User from "../models/usersModel";

export const register = catchAsyncHandler(async (req, res, next) => {
  const { firstname, lastname, email, password, cpassword } = req.body;
  if (password !== cpassword) {
    return next(
      new CustomErrorHandler("Password and Confirm Password do not match.", 401)
    );
  }
  const contacts = await User.create({ firstname, lastname, email, password });
  res.status(200).json({
    success: true,
    contacts,
  });
});

export const getUsers = catchAsyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    users,
  });
});
