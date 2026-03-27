import React from 'react';
import CustomerDetailComponent from "@/components/ui/CustomerDetailComponent";
import { getCustomerById } from "@/lib/services/customerService";

async function Page({ params }) {
    const { id } = await params;

    let customer;
    try {
        customer = await getCustomerById(id);
    } catch {
        return <div className="p-6 text-red-500">Customer not found.</div>;
    }

    return <CustomerDetailComponent props={customer} />;
}

export default Page;

