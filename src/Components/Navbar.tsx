
'use client'

import Image from 'next/image';
import Link from 'next/link';
import WorkoutBtn from '../button/WorkoutBtn';
import MyPlanBtn from '../button/MyPlanBtn';
import { WorkoutContext } from '../context/WorkoutContext';
import { useContext } from 'react';

const Navbar = () => {

    const context = useContext(WorkoutContext)

    const { todayPlan, addSave } = context;

    return (

        <section className='border-b border-gray-900'>

            <div className='container m-auto px-3 sm:px-5 lg:px-0'>

                <div className="navbar bg-black shadow-sm px-0">

                    <div className="navbar-start">

                        <div className='flex items-center gap-1.5 sm:gap-3'>

                            <Image
                                src="/logo.png"
                                alt='logo'
                                width={28}
                                height={28}
                                className="w-6 h-6 sm:w-7 sm:h-7"
                            />

                            <h5 className="text-base font-oswald sm:text-xl font-black text-white">
                                FITLOG
                            </h5>

                        </div>

                    </div>

                    <div className="navbar-center">

                        <ul className="menu menu-horizontal px-0 sm:px-1 gap-0 sm:gap-1">

                            <WorkoutBtn />

                            <MyPlanBtn />

                        </ul>

                    </div>

                    <div className="navbar-end">

                        <div className="flex items-center gap-1.5 sm:gap-3 lg:gap-10 bg-black px-0 lg:px-8 py-3 sm:py-4 lg:py-6">

                            <Link href="/my-plan">

                                <button className="flex items-center gap-1 sm:gap-2 lg:gap-3 text-[11px] sm:text-sm font-semibold text-gray-200">

                                    Plan

                                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11 items-center justify-center rounded-full bg-lime-300 text-xs sm:text-base lg:text-lg font-bold text-black">

                                        {todayPlan.length}

                                    </span>

                                </button>

                            </Link>

                            <Link href="/my-plan">

                                <button className="flex items-center gap-1 sm:gap-2 lg:gap-3 text-[11px] sm:text-sm font-semibold text-gray-400">

                                    Saved

                                    <span className="flex h-7 w-7 sm:h-9 sm:w-9 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-gray-700 text-xs sm:text-base lg:text-lg font-medium text-gray-200">

                                        {addSave.length}

                                    </span>

                                </button>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Navbar;

