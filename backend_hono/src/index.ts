import { Hono } from 'hono'
import mainRoutes from './routes/mainRoutes';

const app = new Hono();

app.route('/api/v1', mainRoutes)

export default app
