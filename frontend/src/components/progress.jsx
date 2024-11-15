import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Calendar from 'react-calendar'
import { ProgressTable } from './table.jsx';
export default function Progress() {

    const percentage = [75, 84];

    return (
        <div className="space-y-[2rem]">
            <div className="flex pr-[1.5rem] items-center justify-center space-x-[33.5rem]">
                <p className="font-semibold text-[16px]">Track your Progress</p>
                <Link className={`text-white underline text-[14px]`} to="/progress">See all</Link>
            </div>
            <div className="flex space-x-[5rem]">
                <div className="flex rounded-[10px] items-center w-[330px] p-[10px] h-[120px] space-x-[1rem] bg-[#0A0B0C]">
                    <p className="text-[40px] font-bold">56</p>
                    <p className="text-[20px]">Clients booked you</p>

                    <CircularProgressbar
                        className="w-[88px] font-bold items-center justify-center"
                        value={percentage[0]}
                        text={`${percentage[0]}%`}
                        styles={buildStyles({
                            pathColor: `#28C541`,
                            textColor: '#28C541',
                            trailColor: '#C5F7CD',
                            backgroundColor: '#C5F7CD',
                            strokeLinecap: 'butt',
                            textSize: '28px',
                        })}
                    />
                </div>
                <div className="flex rounded-[10px] items-center w-[330px] pl-[30px] pr-[10px] h-[120px] space-x-[2rem] bg-[#0A0B0C]">
                    <p className="text-[40px] font-bold">61</p>
                    <p className="text-[20px]">Liked your work</p>

                    <CircularProgressbar
                        className="w-[88px] font-bold items-center justify-center"
                        value={percentage[1]}
                        text={`${percentage[1]}%`}
                        styles={buildStyles({
                            pathColor: `#AF1E30`,
                            textColor: '#AF1E30',
                            trailColor: '#E6D3D5',
                            backgroundColor: '#C5F7CD',
                            strokeLinecap: 'butt',
                            textSize: '28px',
                        })}
                    />
                </div>

            </div>
            <ProgressTable />
        </div>
    );
}
