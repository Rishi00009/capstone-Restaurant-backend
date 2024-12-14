const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');

router.get('/', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

router.get('/:id', async (req, res) => {
  const menuItem = await MenuItem.findById(req.params.id);
  res.json(menuItem);
});

router.post('/', async (req, res) => {
  const menuItem = new MenuItem(req.body);
  await menuItem.save();
  res.json(menuItem);
});

router.put('/:id', async (req, res) => {
  const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(menuItem);
});

router.delete('/:id', async (req, res) => {
  await MenuItem.findByIdAndRemove(req.params.id);
  res.json({ message: 'MenuItem deleted successfully' });
});

module.exports = router;