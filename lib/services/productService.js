import { BASE_URL } from "@/lib/services/api";

export async function getAllProducts() {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    return data.payload;
}

export async function getProductById(id) {
    const res = await fetch(`${BASE_URL}/products/${id}`);
    const data = await res.json();
    return data.payload;
}
