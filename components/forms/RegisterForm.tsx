"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { RegisterFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { FormFieldType } from "./TeacherForm";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { GenderOptions, Program, AppId, OccupationStatus, RegisterFormDefaultValues } from "@/constants";
import { Label } from "../ui/label";
import { SelectItem } from "../ui/select";
import { registerTeacher } from "@/lib/actions/teacher.actions";


const RegisterForm = ({ user }: { user: User }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    // 表單設定區
    const form = useForm<z.infer<typeof RegisterFormValidation>>({
        resolver: zodResolver(RegisterFormValidation),
        defaultValues: {
            ...RegisterFormDefaultValues,
            name: "",
            email: "",
            phone: "",
        },
    })

    // 表單送出後要做的事
    async function onSubmit(values: z.infer<typeof RegisterFormValidation>) {
        // 處理表單的值
        setIsLoading(true);

        // let formData;
        // if (
        //     values.bankBook &&
        //     values.bankBook?.length > 0
        // ) {
        //     const blobFile = new Blob([values.bankBook[0]], {
        //         type: values.bankBook[0].type,
        //     });

        //     formData = new FormData();
        //     formData.append("blobFile", blobFile);
        //     formData.append("fileName", values.bankBook[0].name);
        // }

        try {
            const teacherData = {
                ...values,
                userId: user.$id,
                birthDate: new Date(values.birthDate),
                // bankBook: formData,
            }
            //@ts-ignore
            const teacher = await registerTeacher(teacherData)
            if (teacher) router.push(`/teachers/${user.$id}/new-record`)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12 flex-1">
                <section className="space-y-4">
                    <h1 className="header">成為總監的最後一哩路 👋</h1>
                    <p className="text-dark-700">請提供基本資料，作為後續計算金額以及發放費用使用。</p>
                </section>

                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">個人資料</h2>
                    </div>
                </section>

                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="姓名"
                    placeholder="陳總監"
                    iconSrc="/assets/icons/user.svg"
                    iconAlt="user"
                />
                <CustomFormField
                    fieldType={FormFieldType.INTER}
                    control={form.control}
                    name="monthlyProductivity"
                    label="時效"
                    placeholder="請填寫每月讓學生諮詢幾個小時"
                />

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="teacher@google.com"
                        iconSrc="/assets/icons/email.svg"
                        iconAlt="email"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.PHONE_INPUT}
                        control={form.control}
                        name="phone"
                        label="聯絡電話"
                        placeholder="(555) 123-4567"
                    />
                </div>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.DATE_PICKER}
                        control={form.control}
                        name="birthDate"
                        label="生日"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="gender"
                        label="性別"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <RadioGroup
                                    className="flex h-11 gap-6 xl:justify-between"
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {GenderOptions.map((option, i) => (
                                        <div key={option + i} className="radio-group">
                                            <RadioGroupItem value={option} id={option} />
                                            <Label htmlFor={option} className="cursor-pointer">
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                </div>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="address"
                        label="地址"
                        placeholder="臺北市信義區市府路1號1樓"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="occupation"
                        label="職業"
                        placeholder="軟體工程師" />
                </div>

                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">收款資訊</h2>
                    </div>
                </section>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.MULTISELECT}
                        control={form.control}
                        name="primaryProgram"
                        label="負責專案">
                    </CustomFormField>
                    {/* <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="appId"
                        label="所屬品牌"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <RadioGroup
                                    className="flex h-11 gap-6 xl:justify-between"
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    {AppId.map((option, i) => (
                                        <div key={option + i} className="radio-group">
                                            <RadioGroupItem value={option} id={option} />
                                            <Label htmlFor={option} className="cursor-pointer">
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        )}
                    /> */}
                </div>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.SELECT}
                        control={form.control}
                        name="occupationStatus"
                        label="工作狀態"
                        placeholder="選最符合的">
                        {OccupationStatus.map((status, i) => (
                            <SelectItem key={i} value={status}>
                                <div className="flex cursor-pointer items-center gap-2">
                                    <p>{status}</p>
                                </div>
                            </SelectItem>
                        ))}
                    </CustomFormField>
                    <CustomFormField
                        fieldType={FormFieldType.TEXTAREA}
                        control={form.control}
                        name="specialSkill"
                        label="專長"
                        placeholder="網頁設計、前端工程...等"
                    />
                </div>

                {/* <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="bankCode"
                        label="銀行代號"
                        placeholder="ex.808" />
                    <CustomFormField
                        fieldType={FormFieldType.INPUT}
                        control={form.control}
                        name="bankAccountNumber"
                        label="銀行帳號"
                        placeholder="收款帳號" />
                </div>

                <div className="flex flex-col gap-6 xl:flex-row">
                    <CustomFormField
                        fieldType={FormFieldType.SKELETON}
                        control={form.control}
                        name="bankBook"
                        label="存摺封面"
                        renderSkeleton={(field) => (
                            <FormControl>
                                <FileUploader
                                    files={field.value}
                                    onChange={field.onChange} />
                            </FormControl>
                        )}
                    />
                </div> */}
                <section className="space-y-6">
                    <div className="mb-9 space-y-1">
                        <h2 className="sub-header">隱私權政策</h2>
                    </div>
                </section>
                <div className="flex flex-col gap-6">
                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        control={form.control}
                        name="treatmentConsent"
                        label="我同意參與教學，且願意將我的專業知識授與學生。"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        control={form.control}
                        name="disclosureConsent"
                        label="我同意出於教學業務或帳務需求，使用我提供的資訊。"
                    />
                    <CustomFormField
                        fieldType={FormFieldType.CHECKBOX}
                        control={form.control}
                        name="privacyConsent"
                        label="我已審閱並同意隱私政策。"
                    />

                </div>
                <SubmitButton isLoading={isLoading}>完成</SubmitButton>
            </form>
        </Form>
    )
}

export default RegisterForm
