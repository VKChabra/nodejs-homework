const contactsOperations = require("../../models/contacts");

const add = async (req, res, next) => {
  const newContact = await contactsOperations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: "201",
    data: { result: newContact },
  });
};

module.exports = add;
