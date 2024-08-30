"use server";

import { ID, InputFile, Query } from "node-appwrite";
import {
    BUCKET_ID,
    DATABASE_ID,
    ENDPOINT,
    PROJECT_ID,
    TEACHER_COLLECTION_ID,
    databases,
    storage,
    users,
} from "../appwrite.config";

import { parseStringify } from "../utils";
import { stringify } from "querystring";


export const createUser = async (user: CreateUserParams) => {
    try {
        console.log("Creating user with the following details:");
        console.log("Email:", user.email);
        console.log("Name:", user.name);
        const newuser = await users.create(
            ID.unique(),
            user.email,
            undefined,
            undefined,
            user.name
        )
        console.log(`新的user:${JSON.stringify(newuser, null, 2)}`)

        return parseStringify(newuser);
    } catch (error: any) {
        if (error && error?.code === 409) {
            const existingUser = await users.list([
                Query.equal("email", [user.email]),
            ]);

            return existingUser.users[0];
        }
        console.error("An error occurred while creating a new user:", error);
    }
};

export const getUser = async (userId: string) => {
    try {
        const user = await users.get(userId);

        return parseStringify(user);
    } catch (error) {
        console.log(error)
    }
}

export const getAllUsers = async () => {
    try {
        // 使用 users.list() 來抓取所有的 user 資料
        const allUsers = await users.list();

        // 印出所有抓取到的 user 資料
        console.log(`All users: ${JSON.stringify(allUsers, null, 2)}`);

        // 轉換資料格式後返回
        return parseStringify(allUsers);
    } catch (error) {
        console.error("An error occurred while fetching all users:", error);
    }
};

export const getTeacher = async (userId: string) => {
    try {
        const teachers = await databases.listDocuments(
            DATABASE_ID!,
            TEACHER_COLLECTION_ID!,
            [Query.equal('userId', userId)]
        );
        return parseStringify(teachers.documents[0])

    } catch (error) {
        console.log(error)
    }
}

export const registerTeacher = async ({ bankBook, ...teacher }:
    RegisterUserParams) => {
    try {
        //註解掉的是圖片上傳的程式，暫時不需要，未來有需求再打開
        // let file
        // if (bankBook) {
        //     const inputFile =
        //         bankBook &&
        //         InputFile.fromBlob(
        //             bankBook?.get("blobFile") as Blob,
        //             bankBook?.get("fileName") as string
        //         );
        //     console.log('檢查一下 inputFile:', inputFile);
        //     try {
        //         file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
        //         console.log('檢查一下 file:', file); // 檢查是否正確創建
        //     } catch (error) {
        //         console.error('創建文件時發生錯誤:', error); // 捕獲並打印錯誤
        //     }
        // }

        // console.log({
        //     bankBookId: file?.$id ? file.$id : null,
        //     bankBookUrl: file?.$id
        //         ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
        //         : null,
        // })

        // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
        const newTeacher = await databases.createDocument(
            DATABASE_ID!,
            TEACHER_COLLECTION_ID!,
            ID.unique(),
            {
                // bankBookId: file?.$id ? file.$id : null,
                // bankBookUrl: file?.$id
                //     ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
                //     : null,
                ...teacher,
            }
        );

        return parseStringify(newTeacher);

    } catch (error) {
        console.log(`上傳總監資料時出現錯誤：${error}`)
    }
}

