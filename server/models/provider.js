const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Other provider-specific fields can be added here
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
