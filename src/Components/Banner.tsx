import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Banner = () => {

    return (
        <div className="w-full mx-auto my-12">

            <div className="relative overflow-hidden rounded-2xl bg-[#12141a] border border-gray-800/60 p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-1">

                <div className="flex-1 max-w-2xl z-10">

                    <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#ccff00] uppercase block mb-4">
                        WORKOUT LIBRARY
                    </span>

                    <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black text-white tracking-tight leading-[0.95] uppercase mb-6">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-gray-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <a
                        href="#library"
                        className="inline-flex items-center gap-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-lg"
                    >
                        BROWSE WORKOUTS
                        <ArrowDown size={18} />
                    </a>

                </div>

                <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 flex items-center justify-center lg:justify-end">

                    <Image
                        src="/banner.png"
                        alt="3D Workout Machine Anatomy Illustration"
                        fill
                        priority
                        className="object-contain object-center lg:object-right"
                    />

                </div>

            </div>
        </div>
    );
};

export default Banner;