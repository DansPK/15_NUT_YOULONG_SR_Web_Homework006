'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, ArrowLeft, Minus, Plus, Share2 } from "lucide-react";

export default function ProductDetailComponent({ props }) {
    const [quantity, setQuantity] = useState(1);
    const [wishlisted, setWishlisted] = useState(false);
    const [added, setAdded] = useState(false);

    const increment = () => setQuantity((q) => q + 1);
    const decrement = () => setQuantity((q) => Math.max(1, q - 1));

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    const originalPrice = Math.round(props.price / 0.8);
    const discount = Math.round(((originalPrice - props.price) / originalPrice) * 100);

    return (
        <div>

        </div>

    );
}