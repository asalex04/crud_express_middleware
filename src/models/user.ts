import {Schema} from 'mongoose'
import mongoose from "mongoose"

interface IUser {
    email: string;
    password: string;
    username: string;
}

const userSchema = new Schema<IUser>({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    username: {type: String, required: true}
})

const User = mongoose.model('User', userSchema)
export { User, IUser }