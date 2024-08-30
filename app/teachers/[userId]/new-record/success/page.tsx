import React from 'react';
import Link from "next/link";
import Image from "next/image";
import { getRecord } from '@/lib/actions/record.actions';
import { StudentProgram } from '@/constants';
import { formatDateTime } from '@/lib/utils';
import { Button } from '@/components/ui/button';


const Success = async ({ params: { userId }, searchParams }: SearchParamProps) => {
    const recordId = (searchParams?.recordId as string) || '';
    const record = await getRecord(recordId);
    const selectedProgram = JSON.parse(record.studentProgram);
    const program = StudentProgram.find((program) => program.studentProgramId === selectedProgram.studentProgramId);
    return (
        <div className=" flex h-screen max-h-screen px-[5%]">
            <div className="success-img">
                <Link href="/" passHref>
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="logo"
                        className="h-10 w-fit"
                    />
                </Link>
                <section className="flex flex-col items-center">
                    <Image
                        src="/assets/gifs/success.gif"
                        height={300}
                        width={280}
                        alt="success"
                    />
                    <h2 className="header mb-6 max-w-[600px] text-center">
                        你的 <span className="text-green-500">諮詢記錄</span> 已經成功送出囉！
                    </h2>
                    <p>我們會確認細節，並撥款諮詢費用給你</p>
                </section>

                <section className="request-details">
                    <p>諮詢概要</p>
                    <div className="flex items-center gap-3">
                        <p className="whitespace-nowrap">諮詢專案： {program?.programTopic}</p>
                    </div>
                    <div className="flex gap-2">
                        <Image
                            src="/assets/icons/calendar.svg"
                            height={24}
                            width={24}
                            alt="calendar"
                        />
                        <p>諮詢時間： {formatDateTime(record.schedule).dateTime}</p>
                    </div>
                </section>
                <Button variant="outline" className="shad-primary-btn" asChild>
                    <Link href={`/teachers/${userId}/new-record`}>
                        新增其他記錄
                    </Link>
                </Button>
                <p className="copyright">© 2024 Teachcake</p>

            </div>

        </div>
    )
}

export default Success
