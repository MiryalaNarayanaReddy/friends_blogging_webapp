import z from "zod";


// signup input

export const SignupInput = z.object({
    firstName : z.string().optional(),
    lastName : z.string().optional(),
    username : z.string().min(6),
    email : z.string().email(),
    password : z.string().min(6),
});


export type SignupType = z.infer<typeof SignupInput>;


export const EmailLoginInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type EmailLoginType = z.infer<typeof EmailLoginInput>;

export const UsernameLoginInput = z.object({
    username: z.string().min(6),
    password: z.string().min(6),
});

export type UsernameLoginType = z.infer<typeof UsernameLoginInput>;



// blog checks 


// model Blog {
//     id        String        @id @default(uuid())
//     title     String
//     type      String        
//     createdAt DateTime      @default(now())
//     updatedAt DateTime      @updatedAt
//     userId    String
//     user      User          @relation(fields: [userId], references: [id])
//     content   BlogContent[] @relation("BlogContents")
//   }
  
//   model BlogContent {
//     id        String   @id @default(uuid())
//     blogId    String
//     index     Int
//     content   String
//     blog      Blog     @relation(fields: [blogId], references: [id], name: "BlogContents")
  
//     @@index([blogId])  // Index for better query performance
//   }


export const BlogInput = z.object({
    title: z.string(),
    type: z.string(),
    content : z.array(z.object({
        index: z.number(),
        content: z.string(),
    })),
});

export type BlogInputType = z.infer<typeof BlogInput>;



// blog card data 

export const PublicBlogCard = z.object({
    id: z.string(),
    title: z.string(),
    lastUpdate: z.string(),
    firstParagraph: z.string(),
    authorId: z.string(),
    authorName: z.string(),
});

export type PublicBlogCardType = z.infer<typeof PublicBlogCard>;

export const MyBlogsCard = z.object({
    id: z.string(),
    title: z.string(),
    type: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    firstParagraph: z.string(),
});

export type MyBlogsCardType = z.infer<typeof MyBlogsCard>;


// usersCard

export const UsersCard = z.object({
    id: z.string(),
    username: z.string(),
});

export type UsersCardType = z.infer<typeof UsersCard>;