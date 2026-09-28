'use client'
import { Bookmark } from 'lucide-react';
import React, { useContext } from 'react';
import { WorkoutContext } from '../context/WorkoutContext';
import { toast } from 'react-toastify';

const SaveBtn = ({ exercise }) => {
    const { addSave, setAddSave } = useContext(WorkoutContext);
    const handleSaveBtn = () => {
        const alreadyAdded = addSave.some(
            (item) => item.id === exercise.id
        );

        if (alreadyAdded) {
            toast.error("Already saved!");
            return;
        }

        setAddSave((prev) => [...prev, exercise]);

        toast.success("Saved for later!");
    };

    return (
        <button onClick={handleSaveBtn} className="flex items-center justify-center gap-1 bg-black text-gray-300 border border-[#343644] rounded-xl px-6 h-12 font-medium">
            <Bookmark size={18} />
            Save for later
        </button>

    );
};

export default SaveBtn;