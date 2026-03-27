import React from 'react';
import ProductListComponent from "@/components/ui/ProductListComponent";
import { getAllProducts } from "@/lib/services/productService";

async function Page() {
    const products = await getAllProducts();
    return <ProductListComponent props={products} />;
}

export default Page;