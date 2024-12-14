const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

router.get('/', async (req, res) => {
  const payments = await Payment.find().populate('orderId');
  res.json(payments);
});

router.get('/:id', async (req, res) => {
  const payment = await Payment.findById(req.params.id).populate('orderId');
  res.json(payment);
});

router.post('/', async (req, res) => {
  const payment = new Payment(req.body);
  await payment.save();
  res.json(payment);
});

router.put('/:id', async (req, res) => {
  const payment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(payment);
});

router.delete('/:id', async (req, res) => {
  await Payment.findByIdAndRemove(req.params.id);
  res.json({ message: 'Payment deleted successfully' });
});

module.exports = router;