import { BlogInputType } from "@friendsblog/common";
import { PrismaClient, Prisma } from "@prisma/client";

export async function PublishBlog(body: BlogInputType, userId: string, prisma: PrismaClient) {

    const { type, title, content } = body;

    try {
        
        const blog = await prisma.blog.create({
            data: {
                type,
                title,
                userId
            }
        });

        // content.forEach(async (c) => {
        //     await prisma.blogContent.create({
        //         data: {
        //             index: c.index,
        //             content: c.content,
        //             blogId: blog.id
        //         }
        //     });
        // })

        // the above code did not work as expected because the forEach loop didn't wait for the async functions inside to complete
        await Promise.all(content.map(async (c) => {
            await prisma.blogContent.create({
                data: {
                    index: c.index,
                    content: c.content,
                    blogId: blog.id
                }
            });
        }));


        return {
            success: true,
            message: 'Blog published successfully'
        };

    } catch (error: any) {


        console.error('Error creating user:', error);

        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P6001') {

            return {
                success: false,
                message: 'Blog creation failed',
            };
        }

        return {
            success: false,
            message: 'Internal server error',
            error: error.message
        };
    }
}
