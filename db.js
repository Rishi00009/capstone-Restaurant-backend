const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Restaurants');

module.exports = mongoose;