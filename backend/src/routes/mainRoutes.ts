import express from 'express'
import userRoutes from './User'

const mainRoutes = express.Router();

mainRoutes.use('/auth',userRoutes)
// router.use('/blog',blogRoutes)

export default mainRoutes;