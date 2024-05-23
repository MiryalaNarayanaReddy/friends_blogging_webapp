import { Request, Response } from "express";
import { SignupInput } from "@friendsblog/common";
import { SignupType } from "@friendsblog/common";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from 'bcrypt';


export async function Signup(req: Request, res: Response) {
    const body = SignupInput.safeParse(req.body);

    if (!body.success) {
        return res.status(400).send(body.error);
    }

    const { username, email, password, firstName, lastName } = body.data as SignupType;

    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const prisma = new PrismaClient();
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                firstName: firstName===undefined?'':firstName,
                lastName: lastName===undefined?'':lastName
            }
        });

        res.status(201).json({
            success: true,
            message: 'User created successfully',
        });
    } catch (error:any) {
        console.error('Error creating user:', error);

        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P6001') {
            return res.status(500).json({
                success: false,
                message: 'User already exists',
            });
        }

        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    } 
}
