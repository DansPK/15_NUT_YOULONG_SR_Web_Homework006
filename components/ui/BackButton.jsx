'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
    const router = useRouter();
    return (
        <button
            onClick={() => router.push('/')}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-gray-200 hover:border-gray-400 text-gray-500 hover:text-gray-900 text-sm font-semibold transition-colors"
        >
            <ArrowLeft className="size-4" />
            Go Back
        </button>
    );
}

