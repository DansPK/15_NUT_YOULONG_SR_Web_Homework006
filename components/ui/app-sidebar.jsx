'use client'
import React from 'react';
import {PackageSearch, Users, ChartBarStacked, Settings, LucideShoppingBag} from 'lucide-react'
import {
    Sidebar,
    SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from "@/components/ui/sidebar";
import Image from 'next/image';
import Link from "next/link";


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
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                        <LucideShoppingBag></LucideShoppingBag>
                    <div>
                        <div className= "font-bold text-lg">
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
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.link}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

export default AppSidebar;