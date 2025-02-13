const createError = require("http-errors");
const { contactsServices } = require("../../services");

const updateFavorite = async (req, res, next) => {
  const { _id } = req.user;
  const { contactId } = req.params;
  const { favorite } = req.body;
  const updatedContact = await contactsServices.updateFavorite(_id, contactId, {
    favorite,
  });
  if (!updatedContact)
    throw createError(404, `Contact with ${contactId} id not found`);
  res.status(200).json({
    status: "success",
    code: "200",
    payload: { result: updatedContact },
  });
};

module.exports = updateFavorite;
