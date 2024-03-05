import Image from "next/image";


interface navbarProps {

}

const Navbar: React.FC<navbarProps> = () => {
    return ( 
        <div className="h-[64px] bg-white flex flex-col justify-center border-b">
            <div className="h-full mx-[24px] flex justify-between">
                <div className=" flex flex-col justify-center">
                <Image alt="logo" src="/images/logo.png" width={81} height={60.75}  /> 
               
                </div>

                <div className=" flex flex-col justify-center">
                <Image alt="logo" src="/images/menu.png" width={20.56} height={13.71}  /> 
               
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;