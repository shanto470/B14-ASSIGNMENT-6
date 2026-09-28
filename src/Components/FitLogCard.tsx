import React from 'react';
import Image from "next/image";
import { Clock, Flame, Star } from "lucide-react";
import { ExerciseType } from '../type/Type';
import Link from 'next/link';


interface ExercisePropsTypes {
    fitLog: ExerciseType
}

export default function FitLogCard({ fitLog }: ExercisePropsTypes) {
    const { id } = fitLog
    return (
        <Link href={`/workouts/${id}`}>  <div className=" rounded-2xl bg-[#12141a] border border-gray-800/60 overflow-hidden shadow-xl text-white font-sans" >
            {/* Top Image Container */}
            <div className="relative w-full h-52 overflow-hidden ">
                <Image
                    src={fitLog.image}
                    alt={fitLog.name}
                    fill

                    className="object-cover  w-full h-full"
                />
            </div>

            {/* Content Body */}
            <div className="p-5 flex flex-col gap-3">
                {/* Muscle Group Badges */}
                <div className="flex flex-wrap gap-2">
                    {fitLog.muscleGroups.map((muscle, index) => (
                        <span
                            key={index}
                            className="bg-[#ccff00] text-black font-extrabold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Title & Equipment */}
                <div>
                    <h3 className="text-2xl font-black tracking-tight text-white uppercase leading-tight">
                        {fitLog.name}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5 font-medium">
                        {fitLog.equipment}
                    </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-800/70 w-full my-1" />

                {/* Footer Stats Row */}
                <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                    {/* Duration */}
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{fitLog.duration} min</span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5">
                        <Flame className="w-4 h-4 text-gray-400" />
                        <span>{fitLog.caloriesBurned} kcal</span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-gray-400" />
                        <span>{fitLog.rating}</span>
                    </div>
                </div>
            </div>
        </div></Link>
    );
}