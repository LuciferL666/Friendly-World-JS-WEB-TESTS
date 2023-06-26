const Animal = require('../models/Animal')

exports.getAll = () => Animal.find().populate('owner')

exports.getOne = (animalId) => Animal.findById(animalId).populate('owner')

exports.create = (animalData) => Animal.create(animalData);