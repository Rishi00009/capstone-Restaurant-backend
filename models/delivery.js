const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  deliveryDate: Date,
  deliveryTime: String,
  deliveryAddress: String
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;