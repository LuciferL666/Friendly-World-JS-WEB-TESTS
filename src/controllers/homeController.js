const router = require('express').Router();
const animalManager = require('../managers/animalManager')

router.get('/', (req, res)=>{
//console.log(req.user);
    res.render('home');
});

router.get('/dashboard', async (req, res)=>{
const animals = await animalManager.getAll().lean();

    res.render('dashboard', { animals });
});

router.get('/search', (req, res)=>{
    res.render('search');
});

router.get('/404', (req, res)=>{
    res.render('404');
});


module.exports = router