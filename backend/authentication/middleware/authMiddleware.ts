import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';

const User = require("../models/userModel");

export const protect = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
        try {
            // extract token from authHeader string
            token = authHeader.split(' ')[1]

            // verified token returns user id
            const decoded = jwt.verify(token, process.env.JWT_SECRET + "")

            next();
        } catch (error) {
            res.status(401).json({error: 'Not authorized, invalid token'})
        }
    }

    if (!token) {
        res.status(401).json({error: 'Not authorized, no token found'});
    }
}