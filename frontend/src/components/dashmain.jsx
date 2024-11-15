import MultiStepProgressBar from "./activitySidebar.jsx";
import Dashnav from "./dashnav.jsx";
import MainDash from "./maindash.jsx";
import TailwindCalendar from "./rightscan.jsx";

export default function Dashmain() {
    return(
        <main className="space-y-[0.5rem]">
            <Dashnav />
            <section className="flex justify-center">
                <MainDash />
                <div className="flex flex-col gap-2 h-auto bg-black">
                <TailwindCalendar/>
                <MultiStepProgressBar/>

                </div>

            </section>
        </main>
    )
}