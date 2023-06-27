const router = require('express').Router();

const animalManager = require('../managers/animalManager')
const { getErrorMessage } =  require('../utils/errorHelpers')


router.get('/create', (req, res) =>{
    res.render('animals/create')
});

router.post('/create', async (req, res)=>{
const animalData = {
    ...req.body,
    owner: req.user._id

}
try{
    await animalManager.create(animalData)

    res.redirect('/dashboard')
}catch(err) {
res.render('animals/create', {error: getErrorMessage(err)})
}
});

router.get('/:animalId/details', async(req, res)=>{
    const animalId = req.params.animalId
    const animal = await animalManager.getOne(animalId).lean();
    const isOwner =  req.email == animal.owner._id;

    res.render('animals/details', {animal, isOwner })
})

module.exports = router;