"use server"

import { Record } from "@/types/appwrite.types";
import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";
import { databases, DATABASE_ID, RECORD_COLLECTION_ID } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createRecord = async (record: CreateRecordParams) => {
    try {
        const newRecord = await databases.createDocument(
            DATABASE_ID!,
            RECORD_COLLECTION_ID!,
            ID.unique(),
            record,
        );

        return parseStringify(newRecord);
    } catch (error) {
        console.log(error)
    }
}

export const getRecord = async (recordId: string) => {
    try {
        const record = await databases.getDocument(
            DATABASE_ID!,
            RECORD_COLLECTION_ID!,
            recordId,
        )
        return parseStringify(record)
    } catch (error) {
        console.log(error);
    }
}

export const getRecentRecordList = async () => {
    try {
        const records = await databases.listDocuments(
            DATABASE_ID!,
            RECORD_COLLECTION_ID!,
            [Query.orderDesc('$createdAt')]
        );
        const initialCounts = {
            scheduledCount: 0,
            pendingCount: 0,
            cancelledCount: 0,
        };

        const counts = (records.documents as Record[]).reduce(
            (acc, record) => {
                switch (record.status) {
                    case "scheduled":
                        acc.scheduledCount++;
                        break;
                    case "pending":
                        acc.pendingCount++;
                        break;
                    case "cancelled":
                        acc.cancelledCount++;
                        break;
                }
                return acc;
            },
            initialCounts
        );

        const data = {
            totalCount: records.total,
            ...counts,
            documents: records.documents,
        };

        return parseStringify(data);

    } catch (error) {
        console.log(error)
    }
}

export const updateRecord = async ({
    recordId,
    userId,
    record,
    type,
}: UpdateRecordParams) => {
    try {
        // Update appointment to scheduled -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#updateDocument
        const updateRecord = await databases.updateDocument(
            DATABASE_ID!,
            RECORD_COLLECTION_ID!,
            recordId,
            record
        );

        if (!updateRecord) throw Error;

        // const smsMessage = `Greetings from CarePulse. ${type === "schedule" ? `Your appointment is confirmed for ${formatDateTime(appointment.schedule!, timeZone).dateTime} with Dr. ${appointment.primaryPhysician}` : `We regret to inform that your appointment for ${formatDateTime(appointment.schedule!, timeZone).dateTime} is cancelled. Reason:  ${appointment.cancellationReason}`}.`;
        // await sendSMSNotification(userId, smsMessage);

        revalidatePath("/admin");
        return parseStringify(updateRecord);
    } catch (error) {
        console.error("An error occurred while scheduling an record:", error);
    }
};