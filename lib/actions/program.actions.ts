"use server"

import { Program } from "@/types/appwrite.types";
import { revalidatePath } from "next/cache";
import { ID, Query } from "node-appwrite";
import { databases, DATABASE_ID, PROGRAM_COLLECTION_ID } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createProgram = async (program: CreateProgramParams) => {
    try {
        const newProgram = await databases.createDocument(
            DATABASE_ID!,
            PROGRAM_COLLECTION_ID!,
            ID.unique(),
            program,
        );

        return parseStringify(newProgram);
    } catch (error) {
        console.log(error)
    }
}