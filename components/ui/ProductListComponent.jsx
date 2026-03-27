'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import ProductCardComponent from '@/components/ui/ProductCardComponent';

function ProductListComponent({ props }) {
    const [search, setSearch] = useState('');

    const filtered = props.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-6">

            <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900   pl-3">
                    List of All Product
                </h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-9 pr-4 py-2 text-sm rounded-full border border-gray-200 bg-gray-50  w-56"
                    />
                </div>
            </div>


            {filtered.length > 0 ? (
                <div className="flex flex-wrap gap-5 justify-left">
                    {filtered.map((product) => (
                        <ProductCardComponent key={product.productId} props={product} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-gray-400">
                    <Search className="size-10 mb-3 opacity-30" />
                    <p className="text-sm font-medium">No products found for &quot;{search}&quot;</p>
                </div>
            )}
        </div>
    );
}

export default ProductListComponent;

