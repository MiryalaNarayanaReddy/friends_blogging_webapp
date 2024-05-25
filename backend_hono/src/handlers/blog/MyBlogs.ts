import { MyBlogsCardType } from "@friendsblog/common";
import { PrismaClient, Prisma } from "@prisma/client";

export async function MyBlogs(timestamp:Date, userId:string , prisma: PrismaClient) {
    try {
        // Fetch the blogs updated before the given timestamp and are public
        const blogs = await prisma.blog.findMany({
            where: {
                userId: userId,
                updatedAt: {
                    lt: timestamp
                }
            },
            take: 10,
            orderBy: {
                updatedAt: 'desc'
            },
            select: {
                id: true,
                title: true,
                type: true,
                createdAt: true,
                updatedAt: true,
                content: {
                    where:
                    {
                        index: 0
                    },
                    select: {
                        content: true
                    }
                }
            }
        });


        if (blogs.length === 0) {
            return {
                success: false,
                error: 'No blogs found'
            };
        }

        // Transform the result to the desired format
        const myBlogData : MyBlogsCardType[] = blogs.map(blog => ({
            id: blog.id,
            type: blog.type,
            title: blog.title,
            updatedAt: blog.updatedAt.toISOString(),
            firstParagraph: blog.content[0]?.content || '',
            createdAt: blog.createdAt.toISOString()
        }));

        return {
            success: true,
            myBlogs: myBlogData
        };
        
    } catch (error: any) {
        console.error('Error fetching blogs:', error);
        throw new Error('Error fetching blogs');
    }
}