import React from 'react';
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ProductCardComponent({props}) {
    return (
        <div className="group relative w-[320px] rounded-[1.5rem] overflow-hidden bg-[#0f172a] shadow-2xl flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)]">

            <div className="relative w-full h-[220px] bg-gradient-to-br from-[#1e293b] to-[#0f172a] overflow-hidden">

                <div className="absolute top-3 left-3 z-10 bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/20">
                    New
                </div>


                <div className="absolute top-3 right-3 z-10 flex items-center gap-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full border border-white/20">

                    <Star className="size-3 fill-yellow-400 text-yellow-400" />
                    <span>4.9</span>
                </div>


                <Image
                    src={props.imageUrl ?? "https://www.kindpng.com/picc/m/285-2856629_placeholder-highlights-for-instagram-camra-hd-png-download.png"}
                    alt={props.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                />
            </div>


            <div className="flex flex-col gap-3 p-5">

                <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col">
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.15em]">
              Flagship Series
            </span>
                        <h2 className="text-white text-xl font-black tracking-tight leading-tight mt-0.5">
                            {props.name}
                        </h2>
                    </div>
                    <span className="text-white text-xl font-black whitespace-nowrap">
            ${props.price}
          </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {props.description}
                </p>

                <Link href={`/products/${props.productId}`}>
                    <button className="w-full mt-1 flex items-center justify-center gap-2 bg-[#1e293b] hover:bg-slate-700 text-white font-bold text-sm py-4 rounded-2xl border border-white/10 transition-all duration-300 active:scale-95 group/btn">
                        View Product
                        <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ProductCardComponent;