import { notFound } from "next/navigation";
import { ExerciseType } from "../../../type/Type";
import Image from "next/image";
import Todaybtn from "../../../button/Todaybtn";
import SaveBtn from "../../../button/SaveBtn";

const getFitLogs = async (id: string): Promise<ExerciseType> => {
  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  if (!data || !data.id) {
    notFound();
  }

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
    <div className="container m-auto bg-black text-white px-4 sm:px-6 md:px-8 py-6 sm:py-8">

      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">

        <div className="relative w-full h-[400px] sm:h-[550px] lg:h-[810px] overflow-hidden rounded-2xl border border-[#292B36]">

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

            <h1 className="text-3xl font-oswald sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
              {exercise.name}
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mt-3">
              {exercise.description}
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 mt-5">

              {exercise?.muscleGroups?.map((muscle) => (
                <span
                  key={muscle}
                  className="bg-[#C2F800] text-black text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}

            </div>

          </div>

          <div className="mt-6 sm:mt-8 border border-[#292B36] rounded-2xl overflow-hidden bg-[#15161F]">

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
                className="flex items-center justify-between gap-4 px-4 sm:px-5 md:px-7 py-3.5 sm:py-4 border-b border-[#252733] last:border-b-0"
              >

                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-400">
                  {label}
                </span>

                <span className="text-sm sm:text-base text-gray-200 text-right">
                  {value}
                </span>

              </div>

            ))}

          </div>

          <div className="mt-7 sm:mt-9">

            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wide mb-4 sm:mb-5">
              Instructions
            </h2>

            <ol className="space-y-3 sm:space-y-4">

              {exercise?.instructions?.map((instruction, index) => (

                <li
                  key={index}
                  className="flex gap-3 text-sm sm:text-base text-gray-300 leading-relaxed"
                >
                  <span className="text-gray-500">
                    {index + 1}.
                  </span>

                  <span>{instruction}</span>

                </li>

              ))}

            </ol>

          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">

            <Todaybtn exercise={exercise} />

            <SaveBtn exercise={exercise} />

          </div>

        </div>

      </div>

    </div>
  );
};

export default DetailsPage;