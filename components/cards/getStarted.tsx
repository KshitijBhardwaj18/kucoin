import Image from "next/image"

interface getStartedProps {

}

const GetStarted:React.FC<getStartedProps> = () => {
    return ( 
        <div className="h-[30rem] w-[20rem] bg-[#0052FE] rounded-[8px] flex flex-col gap-[19px]justify-between px-[16px] py-[31px]">

            <div className="text-[24px] font-[700] leading-[40px] text-center text-[white] mx-[25px] m-3  ">
                Get Started with KoinX for FREE
            </div>

            <div className="text-[14px] font-[400] leading-[24px] text-center text-[#F2F2F2]
">
            With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
            </div>
            <div className="mx-auto m-4">
            <Image src="/images/vector1.png" alt="vector" width={178.66} height={166.22}/>
            </div>


            <div className="rounded-[8px] w-[237px] h-[48px] flex  justify-center  mx-auto bg-white">
                <div className="flex flex-col justify-center ">
                <p className="font-[600] text-[16px] leading-[28px] text-[#0F1629]">Get Started for FREE</p>
                </div>
                <div className="flex flex-col justify-center">
                <Image alt="right" src="/images/right.png" height={20} width={20}/>
                </div>
                
            </div>

 
        </div>
     );
}
 
export default GetStarted;