import { Hono } from 'hono';
import authRoutes from './authRoutes';
import blogRoutes from './blogRoutes';
import userRoutes from './userRoutes';

const mainRoutes = new Hono();


mainRoutes.route('/auth', authRoutes)
mainRoutes.route('/blog', blogRoutes)
mainRoutes.route('/user', userRoutes)

export default mainRoutes;