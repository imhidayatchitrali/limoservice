const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const vehicleSchema = mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
      trim: true,
    },
    productionYear: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
       },
    licence: {
      type: String,
      required: true,
      trim: true,
   },
     },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
vehicleSchema.plugin(toJSON);
vehicleSchema.plugin(paginate);

// /**
//  * @param {string} model 
//  * @param {string} productionYear 
//  * @param {string} licence 
//  * @returns {Promise<boolean>}
//  */

/**
 * @typedef Vehicle
 */
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
