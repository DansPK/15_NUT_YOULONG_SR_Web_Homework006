'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Share2, ShoppingCart, Minus, Plus, ArrowLeft } from "lucide-react";
import { PRODUCT_FALLBACK_IMAGE } from "@/lib/utils";

export default function ProductDetailComponent({ props }) {
    const [quantity, setQuantity] = useState(1);
    const [wishlisted, setWishlisted] = useState(false);

    const increment = () => setQuantity((q) => q + 1);
    const decrement = () => setQuantity((q) => Math.max(1, q - 1));

    const originalPrice = (props.price * 1.25).toFixed(0);
    const discount = Math.round(((originalPrice - props.price) / originalPrice) * 100);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="flex w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl bg-white">


                <div className="relative w-1/2 bg-gray-200 flex items-center justify-center min-h-130">

                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                        <span className="bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            New Arrival
                        </span>
                        <span className="bg-cyan-200 text-cyan-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            Free Shipping
                        </span>
                    </div>


                    <div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
                        <button
                            onClick={() => setWishlisted((w) => !w)}
                            className="bg-white rounded-full p-2 shadow hover:scale-110 transition-transform"
                        >
                            <Heart
                                className={`size-4 ${wishlisted ? "fill-red-500 text-red-500" : "text-gray-500"}`}
                            />
                        </button>
                        <button className="bg-white rounded-full p-2 shadow hover:scale-110 transition-transform">
                            <Share2 className="size-4 text-gray-500" />
                        </button>
                    </div>


                    <div className="relative w-full h-95">
                        <Image
                            src={props.imageUrl ?? PRODUCT_FALLBACK_IMAGE}
                            alt={props.name}
                            fill
                            className="object-contain p-6"
                            priority
                        />
                    </div>
                </div>


                <div className="w-1/2 bg-white flex flex-col justify-between p-8 gap-5">

                    <Link
                        href="/products"
                        className="flex items-center gap-1 text-gray-400 text-xs font-semibold uppercase tracking-widest hover:text-gray-700 transition-colors w-fit"
                    >
                        <ArrowLeft className="size-3" />
                        Back to product
                    </Link>


                    <div>
                        <span className="inline-block bg-cyan-200 text-cyan-700 text-[10px] font-bold uppercase tracking-[0.2em] px-1 py-0.5 mb-3">
                            Premium Experience
                        </span>
                        <h1 className="text-4xl font-black text-gray-900 leading-tight">
                            {props.name}
                        </h1>
                    </div>


                    <div className="flex items-center gap-3">
                        <span className="text-3xl font-black text-gray-900">
                            ${props.price.toLocaleString()}
                        </span>
                        <span className="text-base text-gray-400 line-through">
                            ${Number(originalPrice).toLocaleString()}
                        </span>
                        <span className="text-xs font-bold text-emerald-500 uppercase tracking-wide">
                            Save {discount}% today
                        </span>
                    </div>


                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                        {props.description}
                    </p>


                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                            Select Quantity
                        </p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={decrement}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <Minus className="size-3" />
                            </button>
                            <span className="text-xl font-black w-6 text-center">{quantity}</span>
                            <button
                                onClick={increment}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                            >
                                <Plus className="size-3" />
                            </button>
                        </div>
                    </div>


                    <div className="flex gap-3 mt-auto">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-bold text-sm py-3.5 rounded-xl transition-all active:scale-95">
                            <ShoppingCart className="size-4" />
                            Add to Cart
                        </button>
                        <button className="flex-1 font-bold text-sm py-3.5 rounded-xl border-2 border-gray-900 text-gray-900 hover:bg-gray-50 transition-all active:scale-95">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>


        </div>

    );
}