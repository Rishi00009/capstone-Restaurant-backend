const mongoose = require('mongoose');



// Define a model for the restaurant data
const restaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  hours: String,
  cuisine: String,
  priceRange: String,
  rating: Number,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);