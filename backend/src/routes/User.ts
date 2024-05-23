import express from 'express'
import { Signup } from '../handlers/user/Signup'
// import { Login } from '../handlers/user/Login'
import { LoginByEmail } from '../handlers/user/Login'
import { LoginByUsername } from '../handlers/user/Login'

const userRoutes = express.Router()

userRoutes.post('/signup', Signup)

userRoutes.post('/login/byemail', LoginByEmail)
userRoutes.post('/login/byusername', LoginByUsername)

export default userRoutes;
