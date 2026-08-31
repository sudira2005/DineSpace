const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  location: { type: String, required: true, trim: true },
  cuisine: { type: String, required: true, trim: true },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Restaurant', restaurantSchema);
