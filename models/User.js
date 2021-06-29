const mongoose = require('mongoose');


// model: schema를 감싸줌
// schema: 각 세부적인 정보

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,  //trim: space 없애줌
        unique: 1,
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
    },
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
module.exports= {User}  //다른 파일에서도 쓸수있도록 export해줌