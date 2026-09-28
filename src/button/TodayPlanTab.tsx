'use client'
import React, { useContext } from 'react';
import WorkoutProvider, { WorkoutContext } from '../context/WorkoutContext';


const TodayPlanTab = () => {
    const { activeTab, setActiveTab } = useContext(WorkoutContext)
    return (
        <button onClick={() => setActiveTab("today-plan")} className={`px-4 py-2 text-sm ${activeTab === "today-plan" ? "text-white bg-[#20222D] border border-[#2B2D39]" : "text-gray-400"}  rounded-lg`}>
            Today&apos;s Plan
        </button>
    );
};

export default TodayPlanTab;