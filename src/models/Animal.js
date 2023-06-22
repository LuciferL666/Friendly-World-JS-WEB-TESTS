const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  years: {
    type: Number,
    required: [true, 'Years is required']
  },
  kind: {
    type: String,
    required: [true, 'Kind is required']
  },
  image: {
    type: String,
    required: [true, 'ImageUrl is required']
  },
  need: {
    type: String,
    required: [true, 'Need is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  // • donations – an array of objects containing the user's ID
   owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
   },
});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;


// 3chasa i 27 min