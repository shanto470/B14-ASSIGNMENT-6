'use client'
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';

const SavedTab = () => {
    const { activeTab, setActiveTab } = useContext(WorkoutContext)
    return (
        <button onClick={() => setActiveTab("saved")} className={`px-4 py-2 text-sm ${activeTab === "saved" ? "text-white bg-[#20222D] border border-[#2B2D39]" : "text-gray-400"}  rounded-lg`}>
            Saved
        </button>
    );
};

export default SavedTab;