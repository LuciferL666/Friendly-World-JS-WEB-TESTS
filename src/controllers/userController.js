const router = require('express').Router();

const userManager = require('../managers/userManager')

router.get('/login', (req, res)=>{
res.render('users/login')
});

router.post('/login', async(req, res) =>{
    const {email, password} = req.body
    await userManager.login(email, password);

    res.send('Logged in')
});

router.get('/register', (req, res)=>{
    res.render('users/register')
})

router.post('/register', async (req, res) =>{
    const {email, password, repeatPassword} = req.body;
await userManager.register({email, password, repeatPassword});

res.send('registered')
});


module.exports = router;