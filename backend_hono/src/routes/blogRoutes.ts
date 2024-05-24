import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from 'hono/jwt';
import { decode } from 'hono/jwt';

import { BlogInput } from '@friendsblog/common';
import { PublishBlog } from '../handlers/blog/PublishBlog';

const blogRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
    Variables: { userId: string }
}>();

// Middleware to check if the user is authenticated

blogRoutes.use('/*', async (c, next) => {

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

// Route to publish a blog
blogRoutes.post('/publish', async (c) => {

    const userId = c.get('userId');

    console.log('userId in handler:', userId);

    const body = await c.req.json();
    const success = BlogInput.safeParse(body);

    if (!success.success) {
        c.status(400);
        return c.json({ error: success.error });
    }

    try {
        const prisma:any = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL,
        }).$extends(withAccelerate());

        const result = await PublishBlog(body, userId, prisma);
        return c.json(result);
    } catch (e) {
        console.log(e);
        c.status(500);
        return c.json({ error: 'Internal server error' });
    }
});

export default blogRoutes;
