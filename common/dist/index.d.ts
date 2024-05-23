import z from "zod";
export declare const SignupInput: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    username: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    email: string;
    password: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
}, {
    username: string;
    email: string;
    password: string;
    firstName?: string | undefined;
    lastName?: string | undefined;
}>;
export type SignupType = z.infer<typeof SignupInput>;
export declare const EmailLoginInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export type EmailLoginType = z.infer<typeof EmailLoginInput>;
export declare const UsernameLoginInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type UsernameLoginType = z.infer<typeof UsernameLoginInput>;
