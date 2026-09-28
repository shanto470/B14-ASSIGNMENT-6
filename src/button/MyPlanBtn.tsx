// 'use client'
// import React, { useContext } from 'react';
// import { WorkoutContext } from '../context/WorkoutContext';
// import Link from 'next/link';

// const MyPlanBtn = () => {
//     const { active, setActive } = useContext(WorkoutContext)
//     return (
//         <li onClick={() => setActive("my-plan")} className={`text-sm font-semibold px-4 py-1.5 rounded-3xl 
//                             ${active === "my-plan" ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF]"}`}  ><Link href="/my-plan">My Plan</Link></li>
//     );
// };

// export default MyPlanBtn;


'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MyPlanBtn = () => {

    const pathname = usePathname();

    return (
        <li
            className={`text-sm font-semibold px-4 py-1.5 rounded-3xl
                ${pathname === "/my-plan"
                    ? "text-[#C2F800] bg-[#1A2312]"
                    : "text-[#9CA3AF]"
                }`}
        >
            <Link href="/my-plan">My Plan</Link>
        </li>
    );
};

export default MyPlanBtn;