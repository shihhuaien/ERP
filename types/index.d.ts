/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string, userId: string; };
    searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "男性" | "女性" | "不便透露";
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
    name: string;
    email: string;
    // phone: string;
}
declare interface User extends CreateUserParams {
    $id: string;
}

declare interface RegisterUserParams extends CreateUserParams {
    userId: string;
    birthDate: Date;
    gender: Gender;
    address: string;
    occupation: string;
    primaryProgram: string;
    appId: string;
    occupationStatus: string;
    specialSkill: string;
    bankCode: string;
    bankAccountNumber: string;
    monthlyProductivity: string;
    //emergencyContactName: string;
    //emergencyContactNumber: string;
    //primaryPhysician: string;
    //insuranceProvider: string;
    //insurancePolicyNumber: string;
    //allergies: string | undefined;
    //currentMedication: string | undefined;
    //familyMedicalHistory: string | undefined;
    //pastMedicalHistory: string | undefined;
    //identificationType: string | undefined;
    //identificationNumber: string | undefined;
    bankBook: FormData | undefined;
    //identificationDocument: FormData | undefined;
    privacyConsent: boolean;
}

declare type CreateRecordParams = {
    userId: string;
    teacher: string;
    studentProgram: string;
    schedule: Date;
    status: Status;
    recordNote: string;
    otherNote?: string | null;
};

declare type UpdateRecordParams = {
    recordId: string;
    userId: string;
    timeZone: string;
    record: Record;
    type: string;
    cancellationReason: string | null;
};