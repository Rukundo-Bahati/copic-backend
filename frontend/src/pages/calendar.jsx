import Sidenav from '../components/sidenav'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)
const myEventList = [
    {
        title: "Wedding work",
        start: new Date(2024, 9, 26, 10, 0),
        end: new Date(2024, 9, 26, 17, 0)
    },
    {
        title: "Birthday party of Tiphanie",
        start: new Date(2024, 9, 26, 18, 0),
        end: new Date(2024, 9, 26, 21, 0)
    },
    {
        title: "Fashion photography",
        start: new Date(2024, 9, 28, 18, 0),
        end: new Date(2024, 9, 28, 21, 0)
    }
]

const Calendars = () => (
    <div className='flex h-screen bg-black text-white overflow-hidden'>
        <Sidenav />
        <div className='flex flex-col w-full text-white'>
            <h1 className='text-white mt-10 font-bold text-2xl text-center'>Calendar</h1>
            <div className='flex-1 text-white'>
                <Calendar
                    localizer={localizer}
                    events={myEventList}
                    startAccessor="start"
                    endAccessor="end"
                    className='bg-[#0a0b0c] text-white p-5 h-full'
                    style={{ height: "calc(100vh - 4rem)" }}  // Dynamic height adjustment
                />
            </div>
        </div>
    </div>
)

export default Calendars;
