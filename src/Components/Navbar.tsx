'use client'
import Image from 'next/image';
import Link from 'next/link';
// import { useState } from 'react';
import WorkoutBtn from '../button/WorkoutBtn';
import MyPlanBtn from '../button/MyPlanBtn';
import { WorkoutContext } from '../context/WorkoutContext';
import { useContext } from 'react';


const Navbar = () => {
    // const [active, setActive] = useState("workouts")
    const context = useContext(WorkoutContext)
    const { todayPlan, setTodayPlan, addSave } = context;
    return (
        <section className='border-b border-gray-900' >
            <div className=' container m-auto '>
                <div className="navbar bg-black shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>

                        </div>
                        <div className=' flex items-center gap-3'>
                            <Image src="/logo.png" alt='logo' width={28} height={28}></Image>
                            <h5 className=" text-xl font-black text-white">FITLOG</h5>
                        </div>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <WorkoutBtn></WorkoutBtn>
                            <MyPlanBtn></MyPlanBtn>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex items-center gap-10 bg-black px-8 py-6 ">

                            <Link href="/my-plan"> <button className="flex items-center gap-3 text-sm font-semibold text-gray-200 ">
                                Plan
                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-lime-300 text-lg font-bold text-black">
                                    {todayPlan.length}
                                </span>
                            </button></Link>


                            <Link href="/my-plan"> <button className="flex items-center gap-3 text-sm font-semibold text-gray-400">
                                Saved
                                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 text-lg font-medium text-gray-200">
                                    {addSave.length}
                                </span>
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Navbar;