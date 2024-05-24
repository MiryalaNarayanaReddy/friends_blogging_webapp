import { Hono } from 'hono';
import authRoutes from './authRoutes';
import blogRoutes from './blogRoutes';

const mainRoutes = new Hono();


mainRoutes.route('/auth', authRoutes)
mainRoutes.route('/blog', blogRoutes)

export default mainRoutes;