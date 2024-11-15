import Dashmain from "../components/dashmain"
import Sidenav from "../components/sidenav"

export default function Dashpage() {
    return(
        <main className="bg-black flex md:flex-row flex-col  pb-5">
            <Sidenav />
            <Dashmain />
        </main>
    )
}