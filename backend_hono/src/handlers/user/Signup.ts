import { SignupType } from "@friendsblog/common";
import { PrismaClient, Prisma } from "@prisma/client";
import { hashSync } from 'bcrypt-edge';


export async function Signup(body: SignupType, prisma: PrismaClient) {

    const { username, email, password, firstName, lastName } = body;

    try {

        const hashedPassword = hashSync(password, 10); // using bcrypt-edge to hash the password

        
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                firstName: firstName === undefined ? '' : firstName,
                lastName: lastName === undefined ? '' : lastName
            }
        });

        return {
            success: true,
            message: 'User created successfully',
        };

    } catch (error: any) {
        console.error('Error creating user:', error);

        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P6001') {

            return {
                success: false,
                message: 'User already exists',
            };
        }

        return {
            success: false,
            message: 'Internal server error',
            error: error.message
        };
    }
}
