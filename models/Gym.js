const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    photo: String
});

module.exports = mongoose.model('Gym', gymSchema);
