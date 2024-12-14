const express = require('express');
const app = express();
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restaurants');
const menuItemRouter = require('./routes/menuItems');
const orderRouter = require('./routes/orders');
const paymentRouter = require('./routes/payments');
const deliveryRouter = require('./routes/deliveries');

mongoose.connect('mongodb://localhost/food-delivery-platform');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/restaurants', restaurantRouter);
app.use('/api/menuItems', menuItemRouter);
app.use('/api/orders', orderRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/deliveries', deliveryRouter);

app.post('/api/restaurants', async (req, res) => {
  const restaurant = new Restaurant(req.body);
  try {
    await restaurant.save();
    res.json(restaurant);
  } catch (error) {
    console.error('Error saving restaurant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.listen(3001, () => {
  console.log('Server listening on port 3001');
});