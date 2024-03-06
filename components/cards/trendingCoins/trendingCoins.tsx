"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CoinHead from "./component/coinhead";

interface CryptoData<T> {
    item: T;
}

interface trendingCoinsProps {

}

const TrendingCoins:React.FC<trendingCoinsProps> = () => {

    const [coins,setCoins] = useState<CryptoData<any>[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('');

             
              setCoins(response.data.coins.slice(0,3));
              
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
          };

          fetchData();
          
    }, [])

    const round = (number:number, decimals:number) => {
      return Math.round(number * 10 ** decimals) / 10 ** decimals;
    };

    useEffect(() => {
      console.log(coins);
    }, [coins])

    return ( 
        <div className="h-[11rem] w-[20rem] bg-white p-[24px] rounded-[8px] flex flex-col">
            <div className="text-[24px] leading-[28.8px] font-[600]">Trending Coins(24h)</div>
            {
                coins.map(coin => (<div className="m-1" key={coin.item.id}>
                  <CoinHead name={coin.item.name} symbol={coin.item.symbol} change={round(coin.item.data.price_change_percentage_24h.usd,2)}  img={coin.item.small} />
                </div>))
            }


        </div>
     );
}





 



 
export default TrendingCoins;