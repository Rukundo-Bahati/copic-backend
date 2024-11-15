import HelloBanner from "./hello.jsx"
import Progress from "./progress.jsx"

export default function MainDash() {
    return(
        <div className="text-white w-[49rem] pl-5  space-y-[1rem] ">
            <HelloBanner />
            <Progress />
        </div>
    )
}