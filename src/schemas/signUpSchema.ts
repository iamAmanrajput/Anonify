import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 Characters")
  .max(20, "Username must be no more than 20 Characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special Characters");

export const SignUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password Must be atleast 6 Characters" }),
});
