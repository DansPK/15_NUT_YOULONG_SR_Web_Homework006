'use client'
import React from 'react';
import {PackageSearch, Users, ChartBarStacked, Settings, LucideShoppingBag} from 'lucide-react'
import {
    Sidebar,
    SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import Image from 'next/image';
import Link from "next/link";
import {Button} from "@/components/ui/button";


const menu_Items=[
    {
        title: "Products",
        link: "/products",
        icon: PackageSearch
    },
    {
        title: "Customer",
        link: "/customers",
        icon: Users
    },
    {
        title: "Categories",
        link: "/categories",
        icon: ChartBarStacked
    },
    {
        title: "Settings",
        link: "/settings",
        icon: Settings
    }


]
function AppSidebar(props) {
    return (
        <Sidebar>

            <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-3">
                    <div className={"bg-cyan-300 w-15 h-15 rounded-2xl flex justify-center items-center "}>

                        <Link href="/">
                            <LucideShoppingBag className={"text-white text-6xl"}></LucideShoppingBag>
                        </Link>
                    </div>
                    <div>
                        <div className= "font-bold text-cyan-300 text-lg">
                            <Link href="/"> HRD SHOP</Link>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            Admin V2.0
                        </div>

                    </div>

                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel> Main Menu
                       </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menu_Items.map((item) => (
                                <SidebarMenuItem key={item.title} >
                                    <SidebarMenuButton asChild className={"hover:bg-cyan-300 hover:text-white"}>
                                        <a href={item.link} className={"font-semibold text-gray-800 text-[20px]"}>
                                            <item.icon className={`text-cyan-300 size={32}`} />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <Button variant="destructive">logout</Button>
            </SidebarFooter>
        </Sidebar>
    );
}

export default AppSidebar;