import Image from "next/image";

interface coinHeadProps {
  change: number;
  name: string;
  symbol: string;
  img: string;
}

const CoinHead: React.FC<coinHeadProps> = (props) => {
  return (
    <div className="flex felx-row justify-between  w-full h-[28px]">
      <div className="flex flex-row gap-1">
        <Image alt="symbol" src={props.img} height={24} width={24} />
        <p className="font-[500] text-[13px] leading-[24px] text-[#0F1629]">
          {props.name}({props.symbol})
        </p>
      </div>

      {props.change > 0 ? (
        <div className="flex gap-1 w-[84px] rounded-[4px] p-[10px] h-[28px] bg-[#EBF9F4]  ">
          <div className="flex flex-col justify-center">
            <Image src="/images/up.png" alt="up" height={8} width={11} />
          </div>
          <div className="font-[500] flex flex-col justify-center text-[12px] leading-[19.36px] text-center">
            {props.change}%
          </div>
        </div>
      ) : (
        <div className="flex gap-1 w-[84px] rounded-[4px] p-[10px] h-[28px] bg-[#EBF9F4] ">
          <div className="flex flex-col justify-center">
            <Image src="/images/up.png" alt="up" height={8} width={11} />
          </div>
          <div className="font-[500] flex flex-col justify-center text-[12px] leading-[19.36px] text-center">
            {props.change}%
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinHead;
