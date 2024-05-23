import express from 'express'
import userRoutes from './User'

const mainRoutes = express.Router();

mainRoutes.use('/user',userRoutes)
// router.use('/blog',blogRoutes)

export default mainRoutes;