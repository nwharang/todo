import fs from 'fs';
import { __dirname } from '../utils/dirname.js'
import DataMap from '../helper/data.js';
let dataMap = new DataMap("auth")
const getUser = async (req, res, next) => {
    dataMap.setData()
    // res.send()
}

const writeUser = async (req, res, next) => {
    
}


// [Post] /auth/login
const authLogin_Post = (req, res, next) => {
    res.send({ message: "Login" });
    console.log(data);
}

// [Post] /auth/register
const authRegister_Post = (req, res, next) => {
    res.send({ message: "Register" });
}


export {
    authLogin_Post,
    authRegister_Post,
    getUser,
    writeUser
}

