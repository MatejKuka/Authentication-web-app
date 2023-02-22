import Joi from "joi";
import {ILoginUser, IRegisterUser} from "../utils/types";

const validator = (schema: any) => (payload: any) => {
    schema.validate(payload, {abortEarly: false})
}

const registerUserSchema = Joi.object<IRegisterUser>({
    firstName: Joi.string().min(2).max(25).required(),
    email: Joi.string().email().min(4).max(25).required(),
    password: Joi.string().min(4).max(20).required(),
});

const loginUserSchema = Joi.object<ILoginUser>({
    email: Joi.string().required(),
    password: Joi.string().min(4).max(20).required(),
});

export const validateRegisterUser = (payload: IRegisterUser) => {
    return registerUserSchema.validate(payload, {abortEarly: false})
};


export const validateLoginUser = (payload: ILoginUser) => {
    return loginUserSchema.validate(payload, {abortEarly: false})
};