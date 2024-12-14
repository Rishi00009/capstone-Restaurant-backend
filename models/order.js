const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  menuItem: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
  quantity: Number,
  status: String
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;