import { BASE_URL } from "@/lib/services/api";

export async function getAllCustomers() {
    const res = await fetch(`${BASE_URL}/customers`);
    const data = await res.json();
    return data.payload;
}

export async function getCustomerById(id) {
    const res = await fetch(`${BASE_URL}/customers/${id}`);
    const data = await res.json();
    return data.payload;
}
