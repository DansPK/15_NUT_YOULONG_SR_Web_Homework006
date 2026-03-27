import React from 'react';
import ProductDetailComponent from "@/components/ui/ProductDetailComponent";
import { getProductById } from "@/lib/services/productService";

async function Page({ params }) {
    const { id } = await params;

    let product;
    try {
        product = await getProductById(id);
    } catch {
        return <div className="p-6 text-red-500">Product not found.</div>;
    }

    return <ProductDetailComponent props={product} />;
}

export default Page;
