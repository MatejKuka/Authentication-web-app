export interface IUser {
    firstName: string;
    email: string;
    password: string;
}

export interface IRegisterUser {
    firstName: string,
    email: string,
    password: string
}

export interface ILoginUser {
    email: string,
    password: string
}