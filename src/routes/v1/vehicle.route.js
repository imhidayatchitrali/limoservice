const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const vehicleValidation = require('../../validations/vehicle.validation');
const authController = require('../../controllers/vehicle.controller');

const router = express.Router();

router
  .route('/add')
  .post(auth('manageVehicles'), validate(vehicleValidation.addVehicle), authController.addVehicle)
//   .post(auth('manageVehicles'), validate(userValidation.createUser), userController.createUser)
//   .get(auth('getVehicles'), validate(userValidation.getUsers), userController.getUsers);
// router
//   .route('/:userId')
//   .get(auth('getUsers'), validate(userValidation.getUser), userController.getUser)
//   .patch(auth('manageUsers'), validate(userValidation.updateUser), userController.updateUser)
//   .delete(auth('manageUsers'), validate(userValidation.deleteUser), userController.deleteUser);

module.exports = router;