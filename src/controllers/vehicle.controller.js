const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { vehicleService } = require('../services');

const addVehicle = catchAsync(async (req, res) => {
  const vehicle = await vehicleService.createUser(req.body);
  res.status(httpStatus.CREATED).send(vehicle);
});

module.exports = {
    addVehicle,
};
