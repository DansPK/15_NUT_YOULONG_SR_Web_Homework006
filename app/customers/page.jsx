import React from 'react';
import CustomerTableComponent from "@/components/ui/CustomerTableComponent";

async function Page() {
    const data = await fetch("https://homework-api.noevchanmakara.site/api/v1/customers")
    const customers = await data.json();
    console.log(customers);
    return (
        <div>
            <CustomerTableComponent props={customers.payload}></CustomerTableComponent>
        </div>
    );
}

export default Page;