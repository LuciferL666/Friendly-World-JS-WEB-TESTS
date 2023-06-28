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
    const isOwner =  req.user?._id == animal.owner?._id;

    res.render('animals/details', { animal, isOwner })
});

router.get('/:animalId/delete', async (req, res)=>{
    const animalId = req.params.animalId;
    try {

        await animalManager.delete(animalId);
    
        res.redirect('/dashboard')
    } catch (err){
res.render(`/animals/${animalId}/details`, {error: 'Unsuccessful animal deletion'})
    }
});

router.get('/:animalId/edit', async(req, res)=>{
    const animal = await animalManager.getOne(req.params.animalId).lean()
    res.render('animals/edit', { animal })
});

router.post('/:animalId/edit', async(req, res)=>{
const animalId = req.params.animalId
    const animalData = req.body;
    try {

        await animalManager.edit(animalId, animalData);

        res.redirect(`/animals/${animalId}/details`)
    }catch (err){
        res.render('animals/edit', {error: 'Unable to update animal', ...animalData});
    }
})


module.exports = router;