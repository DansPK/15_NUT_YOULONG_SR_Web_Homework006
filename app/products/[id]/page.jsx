import React from 'react';
import ProductDetailComponent from "@/components/ui/ProductDetailComponent";

async function Page({params}) {
    const {id} = await params;
    const res = await fetch(`https://homework-api.noevchanmakara.site/api/v1/products/${id}`);

    if (!res.ok) return <div>Product not found.</div>;

    const data = await res.json();
    return (
        <div>
            <ProductDetailComponent props={data.payload} />
        </div>
    );
}

export default Page;
