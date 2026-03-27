"use client";
import React, { useState } from "react";
import { Calendar, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function CustomerTableComponent({ props }) {
  const [search, setSearch] = useState("");

  const filtered = props.filter((c) => {
    const fullName = `${c.firstName} ${c.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 pl-3">
          List of All Customer
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search customers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm rounded-full border border-gray-200 bg-gray-50 w-56"
          />
        </div>
      </div>


      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-100">
            <TableHead className="font-semibold text-gray-700">
              Customer Name
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Birthdate
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Amount Spent
            </TableHead>
            <TableHead className="font-semibold text-gray-700">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((customer) => (
            <TableRow
              key={customer.customerId}
              className="border-b border-gray-50 hover:bg-gray-50/50"
            >
              <TableCell>
                <p className="font-semibold text-gray-900 text-sm">
                  {customer.firstName} {customer.lastName}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  ID: {customer.customerId.slice(0, 8)}...
                </p>
              </TableCell>


              <TableCell>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="size-4 text-gray-400" />
                  {customer.birthDate}
                </div>
              </TableCell>


              <TableCell>
                <span className="font-bold text-emerald-500 text-sm">
                  ${customer.moneySpent}
                </span>
              </TableCell>


              <TableCell>
                <Link href={`/customers/${customer.customerId}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 rounded-full border-gray-200"
                  >
                    <Eye className="size-4" />
                    View Profile
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default CustomerTableComponent;