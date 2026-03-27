import React from 'react';
import ProductHomepageCardComponent from "@/components/ui/ProductHomepageCardComponent";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import ProductCardComponent from "@/components/ui/ProductCardComponent";
import Header from "@/components/ui/Header";
import {SidebarTrigger} from "@/components/ui/sidebar";



async function Page() {

    const data = await fetch("https://homework-api.noevchanmakara.site/api/v1/products");
    const products = await data.json();


    console.log(products);

    return (

        <div className="w-full h-full flex flex-wrap gap-4 p-4">
            {products.payload.map((product) => {
                return <ProductCardComponent key={product.productId} props={product} />;
            })}
        </div>
    );
}

export default Page;