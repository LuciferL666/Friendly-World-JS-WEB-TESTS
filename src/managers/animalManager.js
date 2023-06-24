const Animal = require('../models/Animal')

exports.getAll = () => Animal.find()

exports.create = (animalData) => Animal.create(animalData);