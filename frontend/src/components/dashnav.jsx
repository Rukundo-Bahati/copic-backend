import { FaChevronDown, FaRegBell,  FaSearchengin } from "react-icons/fa";

export default function Dashnav() {
    return (
        <div className="text-white flex justify-between items-center space-x-[57.8rem] pt-5 pl-6 w-[100%]  ">
            <p className="text-[13px] font-bold ">Dashboard</p>

            <div className="flex items-center space-x-[1.9rem]">
                <FaSearchengin className="text-[20px] cursor-pointer" />

                <FaRegBell className="text-[20px] cursor-pointer relative">
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                </FaRegBell>

                <div className="flex items-center space-x-1 cursor-pointer">
                    <img
                        src="/user.png"
                        alt="profile picture"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <FaChevronDown className="text-[10px]" />
                </div>
            </div>
        </div>
    );
}
