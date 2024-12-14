const express = require('express');
const router = express.Router();
const Delivery = require('../models/delivery');

router.get('/', async (req, res) => {
  const deliveries = await Delivery.find().populate('orderId');
  res.json(deliveries);
});

router.get('/:id', async (req, res) => {
  const delivery = await Delivery.findById(req.params.id).populate('orderId');
  res.json(delivery);
});

router.post('/', async (req, res) => {
  const delivery = new Delivery(req.body);
  await delivery.save();
  res.json(delivery);
});

router.put('/:id', async (req, res) => {
  const delivery = await Delivery.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(delivery);
});

router.delete('/:id', async (req, res) => {
  await Delivery.findByIdAndRemove(req.params.id);
  res.json({ message: 'Delivery deleted successfully' });
});

module.exports = router;