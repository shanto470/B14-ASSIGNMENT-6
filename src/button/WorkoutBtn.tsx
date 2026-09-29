'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const WorkoutBtn = () => {

    const pathname = usePathname();

    return (

        <li
            className={`text-[11px] sm:text-xs lg:text-sm font-semibold
                px-2 sm:px-3 lg:px-4
                py-1 sm:py-1.5
                rounded-3xl

                ${pathname === "/"
                    ? "text-[#C2F800] bg-[#1A2312]"
                    : "text-[#9CA3AF]"
                }`}
        >

            <Link href="/">Workouts</Link>

        </li>

    );
};

export default WorkoutBtn;