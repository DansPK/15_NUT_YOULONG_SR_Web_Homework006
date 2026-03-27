import React from 'react';
import CustomerTableComponent from "@/components/ui/CustomerTableComponent";
import { getAllCustomers } from "@/lib/services/customerService";

async function Page() {
    const customers = await getAllCustomers();
    return (
        <div className="p-6">
            <CustomerTableComponent props={customers} />
        </div>
    );
}

export default Page;