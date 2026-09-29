import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-gray-400 py-6   border-t border-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Brand Logo */}
                <div className="flex items-center gap-2.5 group">
                    <svg
                        className="w-5 h-5 text-[#ccff00] transition-transform duration-200 group-hover:scale-105"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >

                        <path d="M6 5a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zm3 2a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm3-2a1 1 0 0 1 1 1v12a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1zM2 11h20v2H2v-2z" />
                    </svg>
                    <span className="font-extrabold text-white tracking-wider text-base uppercase  font-oswald">
                        FITLOG
                    </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    © 2026 FitLog — Workout Library. Train hard, log honest.
                </p>

            </div>
        </footer>
    );
}