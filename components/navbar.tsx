import Image from "next/image";

interface navbarProps {}

const navItems = [
  {
    label: "Crypto Taxes",
    link: "/",
  },
  {
    label: "Free Tools",
    link: "/",
  },
  {
    label: "Resource Center",
    link: "/",
  },
];

const Navbar: React.FC<navbarProps> = () => {
  return (
    <div className="h-[64px] bg-white flex flex-col justify-center border-b drop-shadow sticky">
      <div className="h-full mx-[24px] flex justify-between">
        <div className=" flex flex-col justify-center">
          <Image alt="logo" src="/images/logo.png" width={81} height={60.75} />
        </div>

        <div className="flex flex-col justify-center sm:hidden">
          <Image
            alt="logo"
            src="/images/menu.png"
            width={20.56}
            height={13.71}
          />
        </div>

        <div className="hidden sm:flex sm:flex-row justify-evenly">
          <div className="flex  justify-center gap-3 ">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="font-semibold text-[14px] flex flex-col justify-center text-[#0F1629] leading-[19.36px] "
              >
                {item.label}
              </div>
            ))}
            <div className="flex flex-col justify-center">
              <div className="h-[40px] w-[136px] rounded p-2 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 text-center text-white font-[600] text-[16px] leading-[19.36px] flex flex-col justify-center ">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
