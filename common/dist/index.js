"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogInput = exports.UsernameLoginInput = exports.EmailLoginInput = exports.SignupInput = void 0;
const zod_1 = __importDefault(require("zod"));
// signup input
exports.SignupInput = zod_1.default.object({
    firstName: zod_1.default.string().optional(),
    lastName: zod_1.default.string().optional(),
    username: zod_1.default.string().min(6),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.EmailLoginInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
});
exports.UsernameLoginInput = zod_1.default.object({
    username: zod_1.default.string().min(6),
    password: zod_1.default.string().min(6),
});
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
exports.BlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    type: zod_1.default.string(),
    content: zod_1.default.array(zod_1.default.object({
        index: zod_1.default.number(),
        content: zod_1.default.string(),
    })),
});
