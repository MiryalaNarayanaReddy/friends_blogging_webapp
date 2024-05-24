import { Hono } from 'hono'
import mainRoutes from './routes/mainRoutes';
import {cors} from 'hono/cors'

const app = new Hono();

app.use('/api/*', cors())
app.use(
  '/api2/*',
  cors({
    origin: 'https://friends-blogging-webapp.vercel.app/',
    allowHeaders: ['X-Custom-Header', 'Upgrade-Insecure-Requests'],
    allowMethods: ['POST', 'GET', 'OPTIONS'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  })
)

app.route('/api/v1', mainRoutes)

export default app
