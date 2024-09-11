"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useEffect, useState } from "react";
import { ProgramFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { getAllUsers } from "@/lib/actions/teacher.actions";
import { ProgramStatus } from "@/constants";
import { SelectItem } from "../ui/select";
import { createProgram } from "@/lib/actions/program.actions";


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

const ProgramForm = () => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [userList, setUserList] = useState<User[]>([]);

    const form = useForm<z.infer<typeof ProgramFormValidation>>({
        resolver: zodResolver(ProgramFormValidation),
        defaultValues: {

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
    const onSubmit = async (values: z.infer<typeof ProgramFormValidation>) => {
        setIsLoading(true);
        try {
            const newProgramData = {
                ...values,
                startAt: new Date(values.startAt),
                endAt: new Date(values.endAt),
                firstReview: new Date(values.firstReview),
                secondReview: new Date(values.secondReview),

            }

            const newProgram = await createProgram(newProgramData);
            router.push(`http://localhost:3000/admin/`);

        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="ProgramID"
                    label="ProgramID"
                    placeholder="請填寫專案的 ID"

                />
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="studentId"
                    label="學生 ID"
                    placeholder="學生的ID"
                />


                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="projectCategoryId"
                        label="專案分類ID"
                        placeholder="分類的ID"
                    />

                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="programStatus"
                        label="專案狀態"
                        placeholder="四選一">
                        {ProgramStatus.map((status, i) => (
                            <SelectItem key={i} value={status}>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <p>{status}</p>
                                </div>
                            </SelectItem>
                        ))}
                    </CustomFormField>
                </div>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name="startAt"
                        label="專案啟動日"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name="endAt"
                        label="專案到期日"
                    />
                </div>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name="firstReview"
                        label="第一階段驗收時間"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name="secondReview"
                        label="完成驗收時間"
                    />
                </div>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name="programNote"
                        label="備註"
                        placeholder="其他記錄"
                    />
                </div>


                <SubmitButton isLoading={isLoading}>送出</SubmitButton>
            </form>
        </Form>
    )
}

export default ProgramForm
