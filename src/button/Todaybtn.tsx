
'use client'

import { CalendarPlus } from 'lucide-react';
import { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { toast } from 'react-toastify';

const Todaybtn = ({ exercise }) => {

    const { todayPlan, setTodayPlan } = useContext(WorkoutContext);

    const handleAddToPlan = () => {
        const alreadyAdded = todayPlan.some(
            (item) => item.id === exercise.id
        );

        if (alreadyAdded) {
            toast.error("Already added!");
            return;
        }

        setTodayPlan((prev) => [...prev, exercise]);

        toast.success("Added to today's plan!");
    };

    return (
        <button
            onClick={handleAddToPlan}
            className="flex items-center justify-center gap-1 bg-[#C2F800] text-black border-none rounded-xl px-6 h-12 font-medium"
        >
            <CalendarPlus size={18} />
            Add to today&apos;s plan
        </button>
    );
};

export default Todaybtn;