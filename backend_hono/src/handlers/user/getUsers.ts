import { UsersCardType } from "@friendsblog/common";
import { PrismaClient, Prisma } from "@prisma/client";

export async function getUsers(userstamp:string, filter:string , prisma: PrismaClient) {
    try {
        // Fetch the blogs updated before the given timestamp and are public
        const users = await prisma.user.findMany({
            where: {
                username: {
                    contains: filter,
                    gt: userstamp
                },
            },
            take: 10,
            orderBy: {
                username : 'asc'
            },
            select: {
                id: true,
                username: true,
                createdAt: true
            }
        });


        if (users.length === 0) {
            return {
                success: false,
                error: 'No users found'
            };
        }

        const usersCardData : UsersCardType[] = users.map(user => ({
            id: user.id,
            username: user.username,
        }));
        
        return {
            success: true,
            usersData: usersCardData
        };
        
    } catch (error: any) {
        console.error('Error fetching blogs:', error);
        throw new Error('Error fetching blogs');
    }
}


