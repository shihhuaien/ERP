import { z } from "zod";

export const UserFormValidation = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
    email: z.string().email("Invalid email address"),
    // phone: z
    //     .string()
    //     .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
});

export const RegisterFormValidation = z.object({
    monthlyProductivity: z
        .string()
        .optional(),
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
        .string()
        .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    birthDate: z.coerce.date(),
    gender: z.enum(["男性", "女性", "不便透露"]),
    address: z
        .string()
        .min(5, "Address must be at least 5 characters")
        .max(500, "Address must be at most 500 characters"),
    occupation: z
        .string()
        .min(2, "Occupation must be at least 2 characters")
        .max(500, "Occupation must be at most 500 characters"),
    primaryProgram: z.string().optional(),
    // bankCode: z.string()
    //     .min(2, "應該是3碼")
    //     .max(4, "應該是3碼"),
    // bankAccountNumber: z.string()
    //     .min(5, "通常在13碼左右")
    //     .max(20, "通常在13碼左右"),
    // appId: z.enum(["無限", "kkschool"]),
    occupationStatus: z.string().optional(),
    specialSkill: z.string().optional(),
    // bankBook: z.custom<File[]>().optional(),
    treatmentConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
            message: "需要同意以繼續",
        }),
    disclosureConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
            message: "需要同意以繼續",
        }),
    privacyConsent: z
        .boolean()
        .default(false)
        .refine((value) => value === true, {
            message: "需要同意以繼續",
        }),
});

export const CreateRecordSchema = z.object({
    studentProgram: z.string().min(2, "Select at least one doctor"),
    schedule: z.coerce.date(),
    recordNote: z
        .string()
        .min(2, "Reason must be at least 2 characters")
        .max(500, "Reason must be at most 500 characters"),
    otherNote: z.string().optional(),
    cancellationReason: z.string().optional(),
});

export const ScheduleRecordSchema = z.object({
    studentProgram: z.string().min(2, "Select at least one doctor"),
    schedule: z.coerce.date(),
    recordNote: z.string().optional(),
    otherNote: z.string().optional(),
    cancellationReason: z.string().optional(),
});

export const CancelRecordSchema = z.object({
    studentProgram: z.string().min(2, "Select at least one doctor"),
    schedule: z.coerce.date(),
    recordNote: z.string().optional(),
    otherNote: z.string().optional(),
    cancellationReason: z
        .string()
        .min(2, "Reason must be at least 2 characters")
        .max(500, "Reason must be at most 500 characters"),
});

export function getRecordSchema(type: string) {
    switch (type) {
        case "create":
            return CreateRecordSchema;
        case "cancel":
            return CancelRecordSchema;
        default:
            return ScheduleRecordSchema;
    }
}