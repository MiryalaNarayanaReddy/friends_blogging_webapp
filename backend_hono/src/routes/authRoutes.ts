import { Hono } from 'hono'
import { Signup } from '../handlers/user/Signup'
// import { Login } from '../handlers/user/Login'
import { LoginByEmail } from '../handlers/user/Login'
import { LoginByUsername } from '../handlers/user/Login'
import { EmailLoginInput, SignupInput, UsernameLoginInput } from '@friendsblog/common'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { sign } from 'hono/jwt'


const authRoutes = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
    },
}>();


authRoutes.post('/signup', async (c) => {

    const body = await c.req.json()
    const success = SignupInput.safeParse(body)

    if (!success.success) {
        c.status(400)
        return c.json({ error: success.error })
    }

    try {
        const prisma: any = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL
        }).$extends(withAccelerate());

        const result = await Signup(body, prisma);

        return c.json(result)

    } catch (e) {
        console.log(e)
        c.status(500)
        return c.json({ error: 'Internal server error' })
    }

})





authRoutes.post('/login/byemail', async (c) => {

    const body = await c.req.json()
    const success = EmailLoginInput.safeParse(body)

    if (!success.success) {
        c.status(400)
        return c.json({ error: success.error })
    }

    try {

        const prisma: any = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL
        }).$extends(withAccelerate());


        const result:any = await LoginByEmail(body, prisma)

        if(result.success){
            const token = await sign({ id: result.user.id, exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) } , c.env?.JWT_SECRET!)
            c.status(200)
            return c.json({...result, token})
        }else{

            c.status(401)
            return c.json(result)
        }

    } catch (e) {
        console.log(e)
        c.status(500)
        return c.json({ error: 'Internal server error' })
    }

})





authRoutes.post('/login/byusername', async (c) => {

    const body = await c.req.json()
    const success = UsernameLoginInput.safeParse(body)

    if (!success.success) {
        c.status(400)
        return c.json({ error: success.error })
    }

    try {

        const prisma: any = new PrismaClient({
            datasourceUrl: c.env?.DATABASE_URL
        }).$extends(withAccelerate());

        const result:any = await LoginByUsername(body, prisma)

        if(result.success){
            c.status(200)
            const token = await sign({ id: result.user.id , exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) } , c.env?.JWT_SECRET!)
            return c.json({...result, token})
        }

        else{
            c.status(401)
            return c.json(result)
        }


    } catch (e) {
        console.log(e)
        c.status(500)
        return c.json({ error: 'Internal server error' })
    }
})


export default authRoutes;
