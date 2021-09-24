const bcrypt = require('bcryptjs');
const User = require('../../../models/user');

const users = async () => {
    try{
        const users = await User.find().populate('bucket');
        return users;
    } catch (err) {
        throw new Error(err);
    }
    
}

const removeUser = async (args) => {
    const { _id } = args.userInput;
    const results = await User.findOneAndDelete({_id: _id});
    return results;
}

const createUser = (args) => {
    const { email, password } = args.userInput;
    return User.findOne({ email: email }).then(user => {
        if(user) {
            throw new Error(' User already exists!');
        }
        return bcrypt
        .hash(password, 12)
        .then( hashedPassword => {
            const newUser = new User({ email: email, password: hashedPassword });
            return newUser
            .save()
            .then(result => ({...result._doc, password: null}))
            .catch(err => console.log(err))
        })
        .catch(err => console.log(err));
    });
   
}

module.exports = {
    createUser,
    users,
    removeUser
}