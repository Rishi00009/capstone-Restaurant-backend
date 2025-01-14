const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  nutritionalInfo: String
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;