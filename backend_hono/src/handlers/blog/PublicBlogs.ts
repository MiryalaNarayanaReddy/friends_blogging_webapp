import { PublicBlogCardType } from "@friendsblog/common";
import { PrismaClient, Prisma } from "@prisma/client";

export async function PublicBlogs(timestamp: Date, prisma: PrismaClient) {
    try {
        // Fetch the blogs updated before the given timestamp and are public
        const blogs = await prisma.blog.findMany({
            where: {
                type: 'public',
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
                updatedAt: true,
                userId: true,
                user: {
                    select: {
                        username: true,
                    }
                },
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

        // debugging content has any

        // const blogs = await prisma.blogContent.findMany({
        //     where: {
        //         index: 0,
        //     }
        // });  

        if (blogs.length === 0) {
            return {
                success: false,
                error: 'No blogs found'
            };
        }

        // Transform the result to the desired format
        const blogCardData: PublicBlogCardType[] = blogs.map(blog => ({
            id: blog.id,
            title: blog.title,
            lastUpdate: blog.updatedAt.toISOString(),
            firstParagraph: blog.content[0]?.content || '',
            authorId: blog.userId,
            authorName: blog.user.username
        }));

        return {
            success: true,
            publicBlogs: blogCardData
        };
    } catch (error: any) {
        console.error('Error fetching blogs:', error);
        throw new Error('Error fetching blogs');
    }
}