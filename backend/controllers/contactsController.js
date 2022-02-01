import catchAsyncHandler from "../middlewares/catchAsyncHandler";
import CustomErrorHandler from "../utils/customErrorHandler";
import Contacts from "../models/contactsModel";

export const getContacts = catchAsyncHandler(async (req, res, next) => {
  const contacts = await Contacts.find();
  res.status(200).json({
    success: true,
    contacts,
  });
});

export const getContact = catchAsyncHandler(async (req, res, next) => {
  const contact = await Contacts.findById(req.query.id);
  console.log(contact);
  if (!contact) {
    return next(
      new CustomErrorHandler(
        "Contact not found. Please select correct detail.",
        401
      )
    );
  }
  res.status(200).json({
    success: true,
    contact,
  });
});

export const createContacts = catchAsyncHandler(async (req, res, next) => {
  const contacts = await Contacts.create(req.body);
  res.status(200).json({
    success: true,
    contacts,
  });
});

export const deleteContact = catchAsyncHandler(async (req, res, next) => {
  const contact = await Contacts.findByIdAndDelete(req.query.id);

  if (!contact) {
    return next(
      new CustomErrorHandler(
        "Contact not found. Please select correct detail.",
        401
      )
    );
  }
  res.status(200).json({
    success: true,
    message: "Contact Deleted Successfully.",
  });
});
