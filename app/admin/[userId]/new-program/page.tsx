import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import StatCard from '@/components/StatCard';
import { getRecentRecordList } from '@/lib/actions/record.actions';
import { DataTable } from '@/components/table/DataTable';
import { columns } from '@/components/table/columns';
import { PROGRAM_COLLECTION_ID } from '@/lib/appwrite.config';
import ProgramForm from '@/components/forms/ProgramForm';
import PasskeyModal from '@/components/PasskeyModal';



const page = ({ searchParams }: SearchParamProps) => {

    const isAdmin = searchParams.admin === "true";



    return (

        <div className="flex h-screen max-h-screen">
            {isAdmin && <PasskeyModal />}
            <section className="remove-scrollbar container">
                <header className="admin-header">
                    <Link href="/" className="cursor-pointer" passHref>
                        <Image
                            src="/assets/icons/logo-full.svg"
                            height={32}
                            width={162}
                            alt="logo"
                            className="h-8 w-fit"
                        />
                    </Link>
                </header>
                <main className="admin-main">
                    <section className="w-full space-y-4 pt-12">
                        <h1 className="header">這邊可以設定專案</h1>
                        <p className="text-dark-700">
                            設定一次永久使用，非常划算值得仔細填寫
                        </p>
                    </section>
                </main>
                <div className="sub-container max-w-[860px] flex-1 flex-col py-5">
                    <ProgramForm />
                    <p className="copyright py-12">
                        © 2024 Teachcake
                    </p>
                </div>
            </section >
            <Image
                src="/assets/images/program-img.png"
                height={1000}
                width={1000}
                alt="teacher"
                className="side-img max-w-[390px]"
            />
        </div >
    )
}

export default page
