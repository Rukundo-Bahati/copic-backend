
import { Typography } from '@material-tailwind/react';
import NewTable from '../components/NewTable'
import ProgressBar from '../components/progressBar'
import Sidenav from '../components/sidenav';
import { FaBell, FaChevronDown, FaSearch } from 'react-icons/fa';
import user1 from '../../public/user1.png'

const Progress = () => {
    return ( 
        <div className='bg-[#000000] w-[100%] min-h-screen overflow-hidden flex'>
         <Sidenav/>
         <div className='flex flex-col gap-4 w-[100%]'>
            <div className='flex items-center mt-7 mb-5 justify-between'>
                <Typography
                variant='h1'
                color='white'
                className='font-bold'>
                Settings &lt; Activity &lt; Tracking your Progress
                </Typography>
                <div className='flex items-center gap-5 mr-10'>
                    <FaSearch className='text-white text-[100%]'/>
                    <FaBell className='text-white text-[100%]'/>
                    <div className='flex items-center gap-2'>
                        <img src={user1} alt="user profile " className='w-[50%]'/>
                        <FaChevronDown className='text-white text-[100%] '/>
                    </div>
                </div>
            </div>
            <div className=' bg-[#0a0b0c] flex flex-col w-full h-[100%] '>
                <Typography
                variant='h2'
                color='white'
                className='font-semibold ml-20 mt-5 text-[120%]'>
                    Tracking your Progress
                </Typography>
             <ProgressBar />
             <NewTable />
            </div>
         </div>

        </div>
     );
}
 
export default Progress;