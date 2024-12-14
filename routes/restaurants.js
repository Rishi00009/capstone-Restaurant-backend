const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/food-delivery-platform', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

  
router.get('/', async (req, res) => {
  const restaurants = await Restaurant.find().populate('menu');
  res.json(restaurants);
});

router.get('/:id', async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id).populate('menu');
  res.json(restaurant);
});

router.post('/', async (req, res) => {
  const restaurant = new Restaurant(req.body);
  await restaurant.save();
  res.json(restaurant);
});

router.put('/:id', async (req, res) => {
  const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(restaurant);
});

router.delete('/:id', async (req, res) => {
  await Restaurant.findByIdAndRemove(req.params.id);
  res.json({ message: 'Restaurant deleted successfully' });
});

module.exports = router;