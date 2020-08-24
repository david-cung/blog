var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/Database')

const mySchema = new mongoose.Schema({
    user: String,
    pass: String
})

const user = mongoose.model(user, mySchema)

user.create({
    name: 'cung',
    pass: '123'
}, (err,user) =>{
    console.log('user')
})




