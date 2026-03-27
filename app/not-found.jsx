import BackButton from '@/components/ui/BackButton';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-12 max-w-lg w-full text-center flex flex-col items-center gap-6">


                <div className="relative select-none">
                    <span className="text-[120px] font-black text-gray-100 leading-none">404</span>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl font-black text-gray-800">
                        Page Not Found
                    </span>
                </div>


                <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                    The page you are looking for does not exist or has been moved.
                </p>


                <BackButton />
            </div>
        </div>
    );
}


