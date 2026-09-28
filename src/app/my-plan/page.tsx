'use client'

import Link from "next/link";
import { Check, ChevronDown, Clock, Flame, Star, X } from "lucide-react";
import { useContext } from "react";
import SavedTab from "../../button/SavedTab";
import TodayPlanTab from "../../button/TodayPlanTab";
import { WorkoutContext } from "../../context/WorkoutContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function MyPlan() {

    const context = useContext(WorkoutContext);
    const router = useRouter();

    if (!context) return null;

    const {
        todayPlan,
        setTodayPlan,
        addSave,
        setAddSave,
        activeTab
    } = context;

    const handleViewDetailsBtn = (id: string) => {
        router.push(`/workouts/${id}`);
    };

    const handlePlanRemove = (id: string) => {
        setTodayPlan(todayPlan.filter((exercise) => exercise.id !== id));
        toast.info("Removes the workout from Today's Plan!");
    };

    const handleSavedRemove = (id: string) => {
        setAddSave(addSave.filter((exercise) => exercise.id !== id));
        toast.info("Removes the workout from Saved!");
    };

    const totalDuration = todayPlan.reduce(
        (total, exercise) => total + exercise.duration,
        0
    );

    const totalCalories = todayPlan.reduce(
        (total, exercise) => total + exercise.caloriesBurned,
        0
    );

    const totalDuration1 = addSave.reduce(
        (total, exercise) => total + exercise.duration,
        0
    );

    const totalCalories1 = addSave.reduce(
        (total, exercise) => total + exercise.caloriesBurned,
        0
    );

    return (
        <div className="min-h-screen bg-[#0D0E14] text-white px-4 sm:px-5 md:px-9 py-6 sm:py-8">

            <div className="max-w-7xl mx-auto">

                <div className="mb-6">
                    <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                        My <span className="text-white">Plan</span>
                    </h1>

                    <p className="text-sm text-gray-400 mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {activeTab === "today-plan" ? (

                    <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#13141C] border border-[#262833] rounded-2xl p-5 md:p-7 mb-8">

                        <div className="sm:border-r border-[#262833] pb-5 sm:pb-0">
                            <p className="text-xs text-gray-400 mb-2">
                                Exercises
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#C2F800]">
                                {todayPlan.length}
                            </h2>
                        </div>

                        <div className="sm:border-r border-[#262833] sm:px-8 py-5 sm:py-0 border-t sm:border-t-0">
                            <p className="text-xs text-gray-400 mb-2">
                                Minutes
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-extrabold">
                                {totalDuration}
                            </h2>
                        </div>

                        <div className="sm:pl-8 pt-5 sm:pt-0 border-t sm:border-t-0 border-[#262833]">
                            <p className="text-xs text-gray-400 mb-2">
                                Calories
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-extrabold">
                                {totalCalories}
                            </h2>
                        </div>

                    </div>

                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-3 bg-[#13141C] border border-[#262833] rounded-2xl p-5 md:p-7 mb-8">

                        <div className="sm:border-r border-[#262833] pb-5 sm:pb-0">
                            <p className="text-xs text-gray-400 mb-2">
                                Exercises
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#C2F800]">
                                {addSave.length}
                            </h2>
                        </div>

                        <div className="sm:border-r border-[#262833] sm:px-8 py-5 sm:py-0 border-t sm:border-t-0">
                            <p className="text-xs text-gray-400 mb-2">
                                Minutes
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-extrabold">
                                {totalDuration1}
                            </h2>
                        </div>

                        <div className="sm:pl-8 pt-5 sm:pt-0 border-t sm:border-t-0 border-[#262833]">
                            <p className="text-xs text-gray-400 mb-2">
                                Calories
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-extrabold">
                                {totalCalories1}
                            </h2>
                        </div>

                    </div>

                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

                    <div className="flex items-center gap-1 bg-[#13141C] border border-[#262833] rounded-xl p-1 w-fit">
                        <TodayPlanTab />
                        <SavedTab />
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-sm text-gray-400">
                            Sort By
                        </span>

                        <div className="relative">
                            <select
                                defaultValue="Duration"
                                className="appearance-none bg-[#13141C] border border-[#262833] rounded-xl text-sm text-white pl-4 pr-10 py-2.5 outline-none cursor-pointer"
                            >
                                <option value="Duration">Duration</option>
                                <option value="Calories">Calories</option>
                                <option value="Rating">Rating</option>
                            </select>

                            <ChevronDown
                                size={15}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                            />
                        </div>
                    </div>

                </div>

                {activeTab === "today-plan" ? (

                    todayPlan.length === 0 ? (

                        <div className="min-h-70 md:min-h-72.5 border border-dashed border-[#292B36] rounded-2xl flex flex-col items-center justify-center text-center px-4">

                            <h2 className="text-xl font-extrabold uppercase tracking-wide mb-1">
                                Nothing Here Yet
                            </h2>

                            <p className="text-sm text-gray-400 mb-5">
                                Browse the library and add a lift to get today moving.
                            </p>

                            <Link
                                href="/"
                                className="btn btn-sm min-h-0 h-auto px-6 py-3 rounded-full bg-[#C2F800] hover:bg-[#a9d900] text-black border-none font-medium"
                            >
                                Go to workouts
                            </Link>

                        </div>

                    ) : (

                        <div>
                            {todayPlan.map((exercise) => (

                                <div
                                    key={exercise.id}
                                    className="bg-[#13141C] border mb-4 border-[#262833] rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row justify-between gap-5 lg:gap-3"
                                >

                                    <div className="flex gap-3">

                                        <Image
                                            className="rounded-xl w-20 h-28 sm:w-20 sm:h-36 object-cover"
                                            src={exercise.image}
                                            alt={exercise.name}
                                            height={144}
                                            width={80}
                                        />

                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-tight">
                                                {exercise.name}
                                            </h3>

                                            <p className="text-gray-400 text-sm my-0.5 font-medium">
                                                {exercise.equipment}
                                            </p>

                                            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs font-medium text-gray-400">

                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-4 h-4 text-[#CCFF00]" />
                                                    <span>{exercise.duration} min</span>
                                                </div>

                                                <div className="flex items-center gap-1.5">
                                                    <Flame className="w-4 h-4 text-[#CCFF00]" />
                                                    <span>{exercise.caloriesBurned} kcal</span>
                                                </div>

                                                <div className="flex items-center gap-1.5">
                                                    <Star className="w-4 h-4 text-[#CCFF00]" />
                                                    <span>{exercise.rating}</span>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="flex items-center justify-between lg:justify-center">

                                        <div className="flex flex-wrap gap-2">

                                            <button
                                                onClick={() => handleViewDetailsBtn(exercise.id)}
                                                className="px-3.5 sm:px-4.5 py-2.5 border border-[#374151] rounded-3xl text-xs sm:text-sm text-white bg-transparent"
                                            >
                                                View Details
                                            </button>

                                            <button
                                                className="flex gap-1 items-center justify-center px-3.5 sm:px-4.5 py-2.5 border border-none rounded-3xl text-xs sm:text-sm text-black bg-[#CCFF00]"
                                            >
                                                <Check className="text-black w-4 h-4" />
                                                Mark as Done
                                            </button>

                                        </div>

                                        <button
                                            onClick={() => handlePlanRemove(exercise.id)}
                                            className="cursor-pointer text-gray-400 hover:text-red-500 ml-3"
                                        >
                                            <X size={20} />
                                        </button>

                                    </div>

                                </div>

                            ))}
                        </div>

                    )

                ) : (

                    <div>

                        {addSave.length === 0 ? (

                            <div className="min-h-70 md:min-h-72.5 border border-dashed border-[#292B36] rounded-2xl flex flex-col items-center justify-center text-center px-4">

                                <h2 className="text-xl font-extrabold uppercase tracking-wide mb-1">
                                    Nothing Here Yet
                                </h2>

                                <p className="text-sm text-gray-400 mb-5">
                                    Browse the library and add a lift to get today moving.
                                </p>

                                <Link
                                    href="/"
                                    className="btn btn-sm min-h-0 h-auto px-6 py-3 rounded-full bg-[#C2F800] hover:bg-[#a9d900] text-black border-none font-medium"
                                >
                                    Go to workouts
                                </Link>

                            </div>

                        ) : (

                            <div>

                                {addSave.map((exercise) => (

                                    <div
                                        key={exercise.id}
                                        className="bg-[#13141C] border mb-4 border-[#262833] rounded-2xl p-4 sm:p-5 flex flex-col lg:flex-row justify-between gap-5 lg:gap-3"
                                    >

                                        <div className="flex gap-3">

                                            <Image
                                                className="rounded-xl w-20 h-28 sm:w-20 sm:h-36 object-cover"
                                                src={exercise.image}
                                                alt={exercise.name}
                                                height={144}
                                                width={80}
                                            />

                                            <div>

                                                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase leading-tight">
                                                    {exercise.name}
                                                </h3>

                                                <p className="text-gray-400 text-sm my-0.5 font-medium">
                                                    {exercise.equipment}
                                                </p>

                                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 text-xs font-medium text-gray-400">

                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-4 h-4 text-[#CCFF00]" />
                                                        <span>{exercise.duration} min</span>
                                                    </div>

                                                    <div className="flex items-center gap-1.5">
                                                        <Flame className="w-4 h-4 text-[#CCFF00]" />
                                                        <span>{exercise.caloriesBurned} kcal</span>
                                                    </div>

                                                    <div className="flex items-center gap-1.5">
                                                        <Star className="w-4 h-4 text-[#CCFF00]" />
                                                        <span>{exercise.rating}</span>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="flex items-center justify-between lg:justify-center">

                                            <button
                                                onClick={() => handleViewDetailsBtn(exercise.id)}
                                                className="px-3.5 sm:px-4.5 py-2.5 border border-[#374151] rounded-3xl text-xs sm:text-sm text-white bg-transparent"
                                            >
                                                View Details
                                            </button>

                                            <button
                                                onClick={() => handleSavedRemove(exercise.id)}
                                                className="cursor-pointer text-gray-400 hover:text-red-500 ml-3"
                                            >
                                                <X size={20} />
                                            </button>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        )}

                    </div>

                )}

            </div>

        </div>
    );
}