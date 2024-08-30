"use client"


import { Button } from "@/components/ui/button"

import { MoreHorizontal } from "lucide-react"
import { ArrowUpDown } from "lucide-react"
import Image from "next/image";
import { ColumnDef } from "@tanstack/react-table"
import StatusBadge from "../StatusBadge"
import { formatDateTime } from "@/lib/utils"
import { Program, StudentProgram } from "@/constants"
import RecordModal from "../RecordModal"
import { Record } from "@/types/appwrite.types";


export const columns: ColumnDef<Record>[] = [

    {
        header: '#',
        cell: ({ row }) => {
            return <p className="text-14-medium ">{row.index + 1}</p>;
        },
    },

    {
        accessorKey: "teacher",
        header: "Teacher",
        cell: ({ row }) => {
            const record = row.original;
            return <p className="text-14-medium">{record.teacher.name}</p>
        }
    },

    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            const record = row.original;
            return (
                <div className="min-w-[115px]">
                    <StatusBadge status={record.status} />
                </div>
            );
        },
    },
    {
        accessorKey: "schedule",
        header: "Date",
        cell: ({ row }) => {
            const record = row.original;
            return (
                <p className="text-14-regular min-w-[100px]">
                    {formatDateTime(record.schedule).dateTime}
                </p>
            );
        },
    },
    {
        accessorKey: "studentProgram",
        header: "Program",
        cell: ({ row }) => {
            const record = row.original;
            const selectedProgram = JSON.parse(record.studentProgram);
            const program = StudentProgram.find((program) => program.studentProgramId === selectedProgram.studentProgramId);


            return (
                <div className="flex items-center gap-3">
                    <p className="whitespace-nowrap">{program?.programTopic}</p>
                </div>
            );
        },
    },
    {
        id: "actions",
        header: () => <div className="pl-4">Actions</div>,
        cell: ({ row }) => {
            const record = row.original;

            return (
                <div className="flex gap-1">
                    <RecordModal
                        teacherId={record.teacher.$id}
                        userId={record.userId}
                        record={record}
                        type="schedule"
                        title="Schedule record"
                        description="確認是否通過審核？" />

                    <RecordModal
                        teacherId={record.teacher.$id}
                        userId={record.userId}
                        record={record}
                        type="cancel"
                        title="cancel record"
                        description="確定取消嗎？" />
                </div>
            );
        },
    }
]
