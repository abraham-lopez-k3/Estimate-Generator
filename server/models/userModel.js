import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    id: Number,
    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    name: String,
    phoneNumber: String
})

const userModel = mongoose.model('users', userSchema, 'Users')
export default userModel