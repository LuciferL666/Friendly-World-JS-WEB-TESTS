//THIS WILL SAVE IT IN DB
const User = require('../models/User');

exports.login = (email, password) => {

};
//cheking for unique user 
exports.register = async (userData) => { //if I can't make it use this exports.register = (userData) => User.create(userData) only
    const user = await User.findOne({email: userData.email});
    if(user){
throw new Error('Username already exists');
    }

    return User.create(userData);
}



//exports.logout = () => 

