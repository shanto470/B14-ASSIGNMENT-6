import { Bookmark, CalendarPlus } from "lucide-react";
import { ExerciseType } from "../../../type/Type";
import Image from "next/image";
import TodayBtn from "../../../button/Todaybtn";
import Todaybtn from "../../../button/Todaybtn";
import SaveBtn from "../../../button/SaveBtn";

const getFitLogs = async (id: string): Promise<ExerciseType> => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  const data = await res.json();

  return data;
};

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const exercise = await getFitLogs(id);

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

        {/* exercise Image */}
        <div className="relative w-full h-[450px] sm:h-[600px] lg:h-[810px] overflow-hidden rounded-2xl border border-[#292B36]">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>


        <div className="flex flex-col">


          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
              {exercise.name}
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-3">
              {exercise.description}
            </p>


            <div className="flex gap-3 mt-5">
              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#C2F800] text-black text-sm font-medium px-4 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>


          <div className="mt-8 border border-[#292B36] rounded-2xl overflow-hidden bg-[#15161F]">

            {[
              ["Equipment", exercise.equipment],
              ["Difficulty", exercise.difficulty],
              ["Sets", exercise.sets],
              ["Reps", exercise.reps],
              ["Duration", `${exercise.duration} min`],
              ["Calories", `${exercise.caloriesBurned} kcal`],
              ["Rating", exercise.rating],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex items-center justify-between px-5 md:px-7 py-4 border-b border-[#252733] last:border-b-0"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-gray-400">
                  {label}
                </span>

                <span className="text-base text-gray-200">
                  {value}
                </span>
              </div>
            ))}

          </div>


          <div className="mt-9">
            <h2 className="text-lg font-bold uppercase tracking-wide mb-5">
              Instructions
            </h2>

            <ol className="space-y-4">
              {exercise.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-gray-300 leading-relaxed"
                >
                  <span className="text-gray-500">{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <Todaybtn exercise={exercise}></Todaybtn>
            <SaveBtn exercise={exercise}></SaveBtn>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
