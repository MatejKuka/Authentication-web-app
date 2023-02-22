const bcrypt = require("bcryptjs")
import {model, Schema} from "mongoose";
import {IUser} from "../utils/types";

const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.matchPassword = async function (enteredPassword: String, userPassword: String) {
    return await bcrypt.compare(enteredPassword, userPassword);
};

const User = model<IUser>('User', userSchema)

module.exports.User;