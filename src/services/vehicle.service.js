const { Vehicle } = require('../models');

/**
 * add a Vehicle
 * @param {Object} vehicleBody
 * @returns {Promise<User>}
 */
const addVehicle = async (vehicleBody) => {
  return Vehicle.create(vehicleBody);
};




module.exports = {
  addVehicle,

};
