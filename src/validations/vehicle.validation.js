const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const addVehicle = {
  body: Joi.object().keys({
    model: Joi.string().required(),
    productionYear: Joi.string().required(),
    licence: Joi.string().required(),
    // role: Joi.string().required().valid('user', 'admin'),
  }),
};

// const getUsers = {
//   query: Joi.object().keys({
//     name: Joi.string(),
//     role: Joi.string(),
//     sortBy: Joi.string(),
//     limit: Joi.number().integer(),
//     page: Joi.number().integer(),
//   }),
// };

const getVehicles = {
  params: Joi.object().keys({
    vehicleId: Joi.string().custom(objectId),
  }),
};

// const updateUser = {
//   params: Joi.object().keys({
//     userId: Joi.required().custom(objectId),
//   }),
//   body: Joi.object()
//     .keys({
//       email: Joi.string().email(),
//       password: Joi.string().custom(password),
//       name: Joi.string(),
//     })
//     .min(1),
// };

// const deleteUser = {
//   params: Joi.object().keys({
//     userId: Joi.string().custom(objectId),
//   }),
// };

module.exports = {
  addVehicle,
  getVehicles
  // getVehicle
  // createUser,
  // getUsers,
  // getUser,
  // updateUser,
  // deleteUser,
};
