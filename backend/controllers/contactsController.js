import Contacts from "../models/contactsModel";

export const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contacts.find();
    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

export const getContact = async (req, res, next) => {
  try {
    const contact = await Contacts.findById(req.params.id);
    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

export const createContacts = async (req, res, next) => {
  try {
    const contacts = await Contacts.create(req.body);
    res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};
