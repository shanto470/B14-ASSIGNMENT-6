import FitLogs from "../Components/FitLogs.tsx";
import Banner from "../Components/Banner.tsx";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" container m-auto">
      <Banner></Banner>
      <FitLogs></FitLogs>

    </div>

  );
}
