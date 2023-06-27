//THIS WILL SAVE IT IN DB
const bcrypt = require('bcrypt')

const jwt = require('../lib/jwt');
const User = require("../models/User");
const { SECRET } = require('../config/config')

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  

  if (!user) {
    throw new Error("Invalid email or password");
  }
  const isValid = await bcrypt.compare(password, user.password);
  if(!isValid){
    throw new Error("Invalid email or password");
  }

const token = await generateToken(user);

return token;
};
//cheking for unique user
exports.register = async (userData) => {
  //if I can't make it use this exports.register = (userData) => User.create(userData) only
  const user = await User.findOne({ email: userData.email });
  if (user) {
    throw new Error("Email already exists");
  }

  const createdUser = await User.create(userData);
 const token = await generateToken(createdUser)

return token;
};

async function generateToken(user){
  const payload = {
    _id: user._id,
    email: user.email,
    //password: user.password
  }
  const token = await jwt.sign(payload, SECRET, {expiresIn: '2d'});
  
  return token;
}
