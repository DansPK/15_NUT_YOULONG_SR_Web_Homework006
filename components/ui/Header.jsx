'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Bell, ShoppingCart, User, CreditCard, Settings } from 'lucide-react';

function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(e) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="w-full border-b border-gray-100 h-16 bg-white flex items-center justify-end px-6 gap-3">


            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="size-5 text-gray-400" />
                <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-cyan-400 ring-2 ring-white" />
            </button>


            <button
                className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
                <ShoppingCart className="size-5 text-gray-400" />

            </button>


            <div className="w-px h-6 bg-gray-200 mx-1" />

            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className="flex items-center gap-2.5 hover:opacity-80 transition-opacity focus:outline-none"
                >
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJJURKQA0T7q4TkmB1AYIhWCyvQf4A3Xmcw&s"
                        alt="Admin User"
                        className="size-9 rounded-full object-cover"
                    />
                    <div className="text-left leading-tight">
                        <p className="text-sm font-semibold text-gray-800">Admin User</p>
                        <p className="text-xs text-gray-400">KSHRD</p>
                    </div>
                </button>

                {dropdownOpen && (
                    <div className="absolute right-0 mt-3 w-52 bg-white rounded-2xl shadow-lg border border-gray-100 py-3 z-50">
                        <div className="px-4 pb-3 border-b border-gray-100">
                            <p className="font-semibold text-gray-900 text-sm">Admin User</p>
                            <p className="text-xs text-gray-400 mt-0.5">admin@hrdshop.com</p>
                        </div>
                        <div className="pt-1">
                            <MenuItem icon={<User className="size-4" />} label="My Profile" />
                            <MenuItem icon={<CreditCard className="size-4" />} label="Billing" />
                            <MenuItem icon={<Settings className="size-4" />} label="Settings" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function MenuItem({ icon, label }) {
    return (
        <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-lg">
            <span className="text-gray-400">{icon}</span>
            {label}
        </button>
    );
}

export default Header;
