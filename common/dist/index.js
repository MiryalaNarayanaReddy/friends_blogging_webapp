"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernameLoginInput = exports.EmailLoginInput = exports.SignupInput = void 0;
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
