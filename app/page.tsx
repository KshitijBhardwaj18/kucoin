import Image from "next/image";
import GetStarted from "@/components/cards/getStarted";
import TrendingCoins from "@/components/cards/trendingCoins/trendingCoins";

export default function Home() {
  return (
      <div className="h-screen flex ">
        <div className="w-full h-screen" ></div>

        <div className="flex flex-col gap-2 p-2"><GetStarted/>
          <TrendingCoins/></div>
          
          
      </div>
  );
}
