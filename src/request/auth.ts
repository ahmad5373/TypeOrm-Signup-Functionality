import {check} from "express-validator";


export const PasswordCheckRequest = [
    check('password' , 'password is required').isLength({min:1}),
    check('password').isString(),
    check('password' , 'Min. length of password should be 8').isLength({min:8})
]

export const BasicInformationRequest =[
    check('email' , 'Email is required').isLength({min:1}),
    check('email' , 'Email is invalid').isEmail(),
    check('password' , 'Password is required').isLength({min:8}),
    check('password').isString(),
]

export const SignupRequest =[
    ...PasswordCheckRequest,
    ...BasicInformationRequest,
]

export const SigninRequest=[
    check('email' , 'Email is required.').isLength({min:1}),
    check('password' , 'passwored is required').isLength({min:1}),
]