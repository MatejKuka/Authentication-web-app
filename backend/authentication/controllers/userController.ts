import {Request, Response} from 'express';
import generateToken from "../utils/generateToken";
import {validateRegisterUser, validateLoginUser} from '../validation/input-validator';

const User = require("../models/userModel");

module.exports.registerUser = async (req: Request, res: Response) => {
    const valid = validateRegisterUser(req.body);

    if (valid.error) {
        console.log(valid.error);
        return res.status(400).json({error: valid?.error.message});
    }

    const {email, password, firstName} = req.body;

    const isUserExist = await User.findOne({email});
    if (isUserExist) {
        return res.status(404).json({error: "User already exists"})
    }

    User.create({
        firstName,
        email,
        password
    }).then((newUser: any) => {
        res.status(201).json({
            id: newUser._id,
            firstName: newUser.firstName,
            email: newUser.email,
        })
    })
        .catch((error: Error) => {
            res.status(400).json(error.message)
        })
}

module.exports.loginUser = async (req: Request, res: Response) => {
    const valid = validateLoginUser(req.body);

    if (valid.error) {
        console.log(valid.error);
        return res.status(400).json({error: valid?.error.message});
    }

    const {email, password} = req.body

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password, user.password))) {
        return res.json({
            id: user._id,
            firstName: user.firstName,
            email: user.email,
            userToken: generateToken(user.id),
        })
    } else {
        return res.status(401).json({message: "invalid email or password"})
    }
}

module.exports.getUserProfile = (req: Request, res: Response) => {
    console.log(req);
}