import React from 'react';
import FitLogCard from './FitLogCard';
import { ExerciseType } from '../type/Type';


const getFitLogs = async (): Promise<ExerciseType[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog")
    const data = await res.json()
    return data
}
const FitLogs = async () => {
    const fitLogsData = await getFitLogs()
    // console.log(fitLogsData);
    return (
        <div className=' container m-auto my-8'>
            <div className='mb-8'>
                <h4 className=' text-3xl font-bold text-white'>THE LIBRARY</h4>
                <p className='my-1 text-sm text-[#9CA3AF]'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className=' grid grid-cols-3 gap-6 '>
                {
                    fitLogsData.map((fitLog: ExerciseType, idx) => <FitLogCard fitLog={fitLog} key={idx}></FitLogCard>)
                }
            </div>
        </div>
    );
};

export default FitLogs;