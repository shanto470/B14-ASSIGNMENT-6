'use client'
import React, { createContext, ReactNode, useState } from 'react';

export const WorkoutContext = createContext(null)

const WorkoutProvider = ({ children }: { children: ReactNode }) => {
    const [active, setActive] = useState("workouts")
    const [todayPlan, setTodayPlan] = useState([])
    const [addSave, setAddSave] = useState([])
    const [activeTab, setActiveTab] = useState('today-plan')
    const [sortBy, setSortBy] = useState("Duration");
    const sharedData = {
        active, setActive, todayPlan, setTodayPlan, addSave, setAddSave, activeTab, setActiveTab, sortBy, setSortBy
    }
    return <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
};

export default WorkoutProvider;