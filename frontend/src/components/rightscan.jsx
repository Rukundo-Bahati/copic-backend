import  { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Still using library's base styles

const TailwindCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="flex justify-center   border-none">
      <div className="w-full max-w-md  p-4 rounded-lg shadow-lg focus:text-black  bg-black border-none hover:text-black">
        <Calendar
          onChange={setValue}
          value={value}
          className="bg-[#0A0B0C] text-white border-none rounded-md "
          tileClassName={() => 'text-white rounded-sm hover:text-black transition duration-150 ease-in-out'}
        />
      </div>
    </div>
  );
};

export default TailwindCalendar;
