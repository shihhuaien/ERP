import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import StatCard from '@/components/StatCard';
import { getRecentRecordList } from '@/lib/actions/record.actions';
import { DataTable } from '@/components/table/DataTable';
import { columns } from '@/components/table/columns';
import { PROGRAM_COLLECTION_ID } from '@/lib/appwrite.config';
import ProgramForm from '@/components/forms/ProgramForm';




const page = () => {
    return (
        <div className="mx-auto flex max-w-7xl flex-col space-y-14">
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
                <section className="w-full space-y-4">
                    <h1 className="header">這邊可以設定專案</h1>
                    <p className="text-dark-700">
                        設定一次永久使用，非常划算值得仔細填寫
                    </p>
                </section>

                <section className="admin-stat">
                    <ProgramForm />

                </section>
                {/* <DataTable columns={columns} data={records.documents} /> */}
            </main>


        </div>
    )
}

export default page
