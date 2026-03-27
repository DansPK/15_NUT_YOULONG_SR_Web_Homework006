import Image from "next/image";
import {SidebarTrigger} from "@/components/ui/sidebar";
import Header from "@/components/ui/Header";
import ProductHomepageCardComponent from "@/components/ui/ProductHomepageCardComponent";
import CustomerHomepageCardComponent from "@/components/ui/CustomerHomepageCardComponent";

export default function Home() {
  return (
      <div className="flex flex-row gap-4 p-4 justify-center items-center">
          <ProductHomepageCardComponent></ProductHomepageCardComponent>
          <CustomerHomepageCardComponent></CustomerHomepageCardComponent>
      </div>

  );
}
