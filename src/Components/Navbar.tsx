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

            <div className='container m-auto px-2 sm:px-3 lg:px-0'>

                <div className="navbar bg-black shadow-sm px-0">

                    <div className="navbar-start">

                        <div className='flex items-center gap-1 sm:gap-2'>

                            <Image
                                src="/logo.png"
                                alt='logo'
                                width={28}
                                height={28}
                                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
                            />

                            <h5 className="text-sm font-oswald sm:text-lg lg:text-xl font-black text-white">
                                FITLOG
                            </h5>

                        </div>

                    </div>

                    <div className="navbar-center sm:mr-2">

                        <ul className="menu menu-horizontal px-0 sm:px-0.5 lg:px-1 gap-0 sm:gap-0.5 lg:gap-1">

                            <WorkoutBtn />

                            <MyPlanBtn />

                        </ul>

                    </div>

                    <div className="navbar-end">

                        <div className="flex items-center gap-1 sm:gap-2 lg:gap-10 bg-black px-0 lg:px-8 py-2 sm:py-3 lg:py-6">

                            <Link href="/my-plan">

                                <button className="flex items-center gap-1 sm:gap-1.5 lg:gap-3 text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-200">

                                    Plan

                                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 lg:h-11 lg:w-11 items-center justify-center rounded-full bg-lime-300 text-[10px] sm:text-xs lg:text-lg font-bold text-black">

                                        {todayPlan.length}

                                    </span>

                                </button>

                            </Link>

                            <Link href="/my-plan">

                                <button className="flex items-center gap-1 sm:gap-1.5 lg:gap-3 text-[10px] sm:text-xs lg:text-sm font-semibold text-gray-400">

                                    Saved

                                    <span className="flex h-6 w-6 sm:h-7 sm:w-7 lg:h-11 lg:w-11 items-center justify-center rounded-full border border-gray-700 text-[10px] sm:text-xs lg:text-lg font-medium text-gray-200">

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