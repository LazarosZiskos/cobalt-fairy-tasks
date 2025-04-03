import { z } from "zod";

// Zod Validation schema for user creation form
// Validates name, surname, email and phone fields
// Used in Task 3 (UserForm component) -- was not required in the task

export const userSchema = z.object({
  name: z.string().min(2, "Name is required"),
  surname: z.string().min(2, "Surname is required"),
  email: z.string().email("Invalid email"),
  phone: z
    .string()
    .min(6, "Phone must be at least 6 digits")
    .regex(/^\d+$/, "Phone must contain only numbers"),
});
