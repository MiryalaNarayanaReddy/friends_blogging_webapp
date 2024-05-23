import { Request, Response } from "express";
import { EmailLoginInput,EmailLoginType} from "@friendsblog/common";
import {UsernameLoginInput,UsernameLoginType } from "@friendsblog/common";
import { PrismaClient, Prisma } from "@prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

function LoginByEmail(req: Request, res: Response) {
    const body = EmailLoginInput.safeParse(req.body);

    if (!body.success) {
        return res.status(400).send(body.error);
    }

    const { email, password } = body.data as EmailLoginType;

    prisma.user.findUnique({
        where: {
            email: email
        }
    }).then(async (user) => {
        if (user === null) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
            expiresIn: 3600
        });

        res.status(200).json({
            success: true,
            token: token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });

    }).catch((error: any) => {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    });

}

// login by username function

function LoginByUsername(req: Request, res: Response) {
    const body = UsernameLoginInput.safeParse(req.body);

    if (!body.success) {
        return res.status(400).send(body.error);

    }

    const { username, password } = body.data as UsernameLoginType;

    prisma.user.findUnique({
        where: {
            username: username
        }
    }).then(async (user) => {
        if (user === null) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
            expiresIn: 3600
        });

        res.status(200).json({
            success: true,
            token: token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
        });

    }).catch((error: any) => {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    });
}

export { LoginByEmail, LoginByUsername };


