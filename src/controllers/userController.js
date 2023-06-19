const router = require('express').Router();

const userManager = require('../managers/userManager')

router.get('/login', (req, res)=>{
res.render('users/login')
});

router.get('/register', (req, res)=>{
    res.render('users/register')
})

module.exports = router;