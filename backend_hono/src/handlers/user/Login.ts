
import { EmailLoginType } from "@friendsblog/common";
import { UsernameLoginType } from "@friendsblog/common";
import { PrismaClient } from "@prisma/client/edge";

import jwt from 'jsonwebtoken';
import { compareSync } from "bcrypt-edge";


async function LoginByEmail(body: EmailLoginType, prisma: PrismaClient) {

    const { email, password } = body;

    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (user === null) {
        return {
            success: false,
            message: 'User not found'
        };
    }

    const isMatch = compareSync(password, user.password); // using bcrypt-edge to compare the password

    if (!isMatch) {
        return {
            success: false,
            message: 'Invalid credentials'
        };
    }

    return {
        success: true,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }
    };

}

// login by username function

async function LoginByUsername(body: UsernameLoginType, prisma: PrismaClient) {


    const { username, password } = body;

    // const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    });

    if (user === null) {
        return {
            success: false,
            message: 'User not found'
        };
    }

    const isMatch = compareSync(password, user.password); // using bcrypt-edge to compare the password

    if (!isMatch) {
        return {
            success: false,
            message: 'Invalid credentials'
        };
    }

    return {
        success: true,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName
        }
    };
}

export { LoginByEmail, LoginByUsername };


