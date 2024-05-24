import { Hono } from 'hono';
import authRoutes from './authRoutes';

const mainRoutes = new Hono();


mainRoutes.route('/auth', authRoutes)

export default mainRoutes;