const router = require('express').Router();

router.get('/create', (req, res) =>{
    res.render('animals/create')
});

module.exports = router;