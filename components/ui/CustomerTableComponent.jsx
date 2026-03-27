'use client'
import React from 'react';
import { MoreHorizontalIcon,Calendar,Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function CustomerTableComponent({props}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>AmountSpent</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    props.map((customer) => (
                        <TableRow key={customer.customerId}>
                            <TableCell className="font-medium">{customer.firstName} {customer.lastName}</TableCell>
                            <TableCell>
                                <div className="flex flex-row items-center gap-2">
                                    <div>
                                        <Calendar />
                                    </div>
                                    <div>
                                        {customer.birthDate}
                                    </div>
                                </div>






                            </TableCell>
                            <TableCell>{customer.moneySpent}</TableCell>
                            <TableCell>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <Eye/><Link href={`/customers/${customer.customerId}`}>View Profile</Link>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))

                }
            </TableBody>
        </Table>
    );
}

export default CustomerTableComponent;