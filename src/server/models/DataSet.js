const mongoose = require('mongoose');

const { Schema, ObjectId } = mongoose;

const RequiredString = { type: String, required: true };

const dataSetSchema = new Schema({
  name: RequiredString,

  // NOTE: ⚠️ might want to include 10-20 most recent data points here
  //       for convenience...
});

// dataSetSchema.index({ owner: 1 });

const DataSet = mongoose.model('DataSet', dataSetSchema);

module.exports = DataSet;
