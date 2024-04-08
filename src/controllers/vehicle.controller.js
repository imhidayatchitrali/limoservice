const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { vehicleService } = require('../services');

const addVehicle = catchAsync(async (req, res) => {
  console.log('HERE')
  const vehicle = await vehicleService.addVehicle(req.body);
  res.status(httpStatus.CREATED).send(vehicle);
});

module.exports = {
    addVehicle,
};
