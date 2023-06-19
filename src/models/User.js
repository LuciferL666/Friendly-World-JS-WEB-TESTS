const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //Bcrypt hash password

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    }
});

//Password validation
userSchema.virtual('repeatPassword')
.set(function(value){
    if(this.password !== value){
        throw new Error('Password missmatch!')
    }
})

//Bcrypt hash password
userSchema.pre('save', async function(){
const hash = await bcrypt.hash(this.password, 10);

this.password = hash
})

const User = mongoose.model('User', userSchema);

module.exports = User;