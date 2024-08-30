import { Models } from "node-appwrite";

export interface Teacher extends Models.Document {
    userId: string;
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    occupation: string;
    primaryProgram: string;
    documentUrl: FormData | undefined;
    privacyConsent: boolean;
    projectTopic: string;
    monthlyProductivity: string;
}

export interface Record extends Models.Document {
    teacher: Teacher;
    schedule: Date;
    status: Status;
    studentProgram: string;
    reason: string;
    recordNote: string;
    otherNote: string | null;
    userId: string;
    cancellationReason: string | null;
}