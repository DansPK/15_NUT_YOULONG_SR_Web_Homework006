import React from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Hash } from 'lucide-react';

function CustomerDetailComponent({ props }) {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="flex w-full max-w-3xl bg-white rounded-3xl shadow-sm overflow-hidden">


                <div className="w-56 bg-gray-50 flex flex-col items-center justify-center gap-4 py-12 px-6 border-r border-gray-100">
                    <div className="size-24 rounded-full bg-gray-200 flex items-center justify-center">
                        <User className="size-10 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <p className="font-bold text-gray-800 text-base text-center">
                        {props.firstName} {props.lastName}
                    </p>
                </div>


                <div className="flex-1 flex flex-col justify-between p-8 gap-6">


                    <Link
                        href="/customers"
                        className="flex items-center gap-1 text-gray-400 text-xs font-semibold uppercase tracking-widest hover:text-gray-700 transition-colors w-fit"
                    >
                        <ArrowLeft className="size-3" />
                        Back to Customer Table
                    </Link>


                    <div className="grid grid-cols-2 gap-x-10 gap-y-6">


                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Full Name</p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                <User className="size-4 text-amber-400" />
                                {props.firstName} {props.lastName}
                            </div>
                        </div>


                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Total Spent</p>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl font-black text-emerald-500">${props.moneySpent}</span>
                            </div>
                        </div>


                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Birthdate</p>
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                                <Calendar className="size-4 text-amber-400" />
                                {props.birthDate}
                            </div>
                        </div>


                        <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Account ID</p>
                            <div className="flex items-center gap-2">
                                <Hash className="size-4 text-gray-300" />
                                <span className="text-xs text-gray-400 break-all">{props.customerId}</span>
                            </div>
                        </div>
                    </div>


                    <div className="flex gap-3">
                        <button className="px-6 py-2.5 bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold rounded-xl cursor-default transition-colors">
                            Edit Profile
                        </button>
                        <button className="px-6 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-400 hover:text-rose-500 text-sm font-bold rounded-xl cursor-default transition-colors">
                            Delete This User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerDetailComponent;