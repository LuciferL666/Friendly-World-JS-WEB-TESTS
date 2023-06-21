const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  years: {
    type: Number,
    required: true,
  },
  kind: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  need: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // • donations – an array of objects containing the user's ID
   owner: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
   },
});


// 3chasa i 27 min