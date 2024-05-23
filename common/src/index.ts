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



