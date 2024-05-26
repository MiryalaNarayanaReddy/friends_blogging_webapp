import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';

import { getUsers } from '../handlers/user/getUsers';

const userRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: { userId: string }
}>();


// Middleware to check if the user is authenticated

userRoutes.use('/*', async (c, next) => {

    const header = c.req.header('Authorization') || "";
    const token = header.split(' ')[1];

    if (!token) {
        return c.json({ error: 'Unauthorized' })
    }

    try {
        const jwt = await verify(token, c.env.JWT_SECRET);

        if (jwt) {
            c.set('userId', jwt.id as string)

            await next();
        } else {
            return c.json({ error: 'Unauthorized' });
        }
    }
    catch (error) {
        return c.json({ error: 'Unauthorized' });
    }

})

userRoutes.get('/all/:filter?/:userstamp?', async (c) => {
    // if filter changed reset timestamp to '' to get all users upto 10 created before the timestamp and username like filter

    try {
        let filter: any = c.req.param('filter');
        let userstamp: any = c.req.param('userstamp');

        if (filter === 'undefined') {
            filter = '';
        }
        if (userstamp === 'undefined') {
            userstamp = '';
        }


        const prisma: any = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const users = await getUsers(userstamp, filter, prisma);

        // if (users.success) {
        //     c.status(200);
        //     return c.json(users);
        // }

        c.status(200)
        return c.json(users);

    } catch (error) {
        c.status(500);
        return c.json({ error: 'Error fetching users' });
    }
})





export default userRoutes;
