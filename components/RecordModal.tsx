"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Record } from "@/types/appwrite.types";

import "react-datepicker/dist/react-datepicker.css";
import RecordForm from "./forms/RecordForm";


const RecordModal = ({
    teacherId,
    userId,
    record,
    type,
}: {
    teacherId: string;
    userId: string;
    record?: Record;
    type: "schedule" | "cancel";
    title: string;
    description: string;
}) => {

    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    className={`capitalize ${type === "schedule" && "text-green-500"}`}>
                    {type}
                </Button>
            </DialogTrigger>
            <DialogContent className="shad-dialog sm:max-w-md">
                <DialogHeader className="mb-4 space-y-3">
                    <DialogTitle className="capitalize">{type} Record</DialogTitle>
                    <DialogDescription>
                        Please fill in the following details to {type} appointment
                    </DialogDescription>
                </DialogHeader>

                <RecordForm
                    userId={userId}
                    teacherId={teacherId}
                    type={type}
                    record={record}
                    setOpen={setOpen}
                />

            </DialogContent>
        </Dialog>
    )
}

export default RecordModal
