import ProductHomepageCardComponent from "@/components/ui/ProductHomepageCardComponent";
import CustomerHomepageCardComponent from "@/components/ui/CustomerHomepageCardComponent";
import { getAllCustomers } from "@/lib/services/customerService";

export default async function Home() {
    const customers = await getAllCustomers();

    return (
        <div className="flex flex-row gap-4 p-4 justify-center items-center">
            <ProductHomepageCardComponent />
            <CustomerHomepageCardComponent count={customers.length} />
        </div>
    );
}
