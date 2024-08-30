"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useEffect, useState } from "react"
import { UserFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation"
import { createUser, getAllUsers } from "@/lib/actions/teacher.actions"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'date_picker',
    SELECT = 'select',
    SKELETON = 'skeleton',
    MULTISELECT = 'multiselect',
    POSITIVE_INTEGER = 'positiveInteger',
    INTER = 'inter'
}

const TeacherForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [userList, setUserList] = useState<User[]>([]);

    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            // phone: "",
        },
    })

    // 使用 useEffect 在 component 渲染時抓取所有的 user 資料
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { users } = await getAllUsers();
                setUserList(users);
                console.log(users);
            } catch (error) {
                console.error("Failed to fetch users:", error);
            }
        };

        fetchUsers();
    }, []);

    // 表單送出後要做的事
    const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
        setIsLoading(true);
        try {
            const user = {
                name: values.name,
                email: values.email,
            };
            // 檢查是否已經存在該 email 的使用者
            const existingUser = userList.find(user => user.email === values.email);

            if (existingUser) {
                // 如果已經存在，跳轉到 /teachers/${existingUser.$id}/new-record
                router.push(`/teachers/${existingUser.$id}/new-record`);
            } else {
                // 如果該 email 不存在，則創建新 user
                const newUser = await createUser(user);

                console.log(`this is newUser that insert in db:${newUser}`);

                if (newUser) {
                    router.push(`/teachers/${newUser.$id}/register`);
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="總監姓名"
                    placeholder="陳總監"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="teacher@google.com"
                    iconSrc="/assets/icons/email.svg"
                    iconAlt="email"
                />
                <SubmitButton isLoading={isLoading}>開始</SubmitButton>
            </form>
        </Form>
    )
}

export default TeacherForm
