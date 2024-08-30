import React from 'react'

import Image from "next/image"
import TeacherForm from "@/components/forms/TeacherForm";
import Link from "next/link";
import RecordForm from '@/components/forms/RecordForm';
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils/route-matcher';
import { getTeacher } from '@/lib/actions/teacher.actions';


export default async function NewRecord({ params: { userId } }: SearchParamProps) {
    const teacher = await getTeacher(userId)

    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[860px] flex-1 justify-between">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="teachcake"
                        className="mb-12 h-10 w-fit"
                    />

                    <RecordForm
                        type="create"
                        userId={userId}
                        teacherId={teacher.$id} />

                    <p className="copyright mt-10 py-12">
                        © 2024 Teachcake
                    </p>

                </div>
            </section >
            <Image
                src="/assets/images/appointment-img.png"
                height={1000}
                width={1000}
                alt="record"
                className="side-img max-w-[390px] bg-bottom"
            />
        </div >
    )
}

