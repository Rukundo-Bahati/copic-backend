import {Card, Typography} from '@material-tailwind/react'

const Table_Head=["Full names","Role","Date","Status","Liked","Reported"];
const Table_Row=[
    {
        names:"Andy Melvin",
        role:"Client",
        date:"21st, March",
        status:"Accepted",
        liking:"LIKED",
        report:"None"
    },
    {
        names:"Kagabo Jean Damas",
        role:"Client",
        date:"21st, March",
        status:"Pending",
        liking:"PENDING",
        report:"Reported"
    },
    {
        names:"Ange Vanessa",
        role:"Client",
        date:"20th, March",
        status:"Pending",
        liking:"DISLIKED",
        report:"None"
    },
    {
        names:"Rudaseswa Thierry",
        role:"Client",
        date:"18th, March",
        status:"Declined",
        liking:"LIKED",
        report:"None"
    },
    {
        names:"Nelly Sunny",
        role:"Client",
        date:"17th, March",
        status:"Accepted",
        liking:"LIKED",
        report:"None"
    },
    {
        names:"Dushimire Aine",
        role:"Client",
        date:"16th, March",
        status:"Declined",
        liking:"DISLIKED",
        report:"Reported"
    },
    {
        names:"Kalisa Patrick",
        role:"Photographer",
        date:"14th, March",
        status:"Accepted",
        liking:"LIKED",
        report:"None"
    },
    {
        names:"Kimenyi Yves",
        role:"Photographer",
        date:"12th, March",
        status:"Declined",
        liking:"LIKED",
        report:"None"
    },
]




const ProgressTable=()=>{

    return (
<Card className='w-[80%] mx-auto my-10 h-[100%] bg-[#0a0b0c] rounded-lg '>
    <table className='text-left min-w-max table-auto w-full'>
        <thead>
            <tr
            className='h-[40px] bg-[#0a0b0c] '>
                {Table_Head.map((head)=>{
                return ( 
                <th
                    key={head}
                    className='bg-[#101011] pl-4 leading-none border-b border-gray-700'>
                       <Typography
                       variant='small'
                       color='white'
                       className=' opacity-70 font-normal'
                       >
                        {head}
                       </Typography>
                    </th>
                )})}
            </tr>
        </thead>
        <tbody>
     {Table_Row.map(({names,role,date,status,liking,report},index)=>{
        const StatusColor=
        status === "Accepted" ?
        'text-green-500': status === "Pending" ?
        "text-yellow-500":"text-red-500"
      const lastIndex= index=== Table_Row.length -1;
        const classes= lastIndex ?
        "pl-4 h-[40px] leading-none":'pl-4 h-[40px] leading-none'
        const Report = report === 'Reported'?
        'text-red-500' : "text-gray-500"
        return(
       <>
           <tr
           key={names}
           className={` h-[20px] ${index % 2 == 0 ? 'bg-[#141415]':'bg-[#101011]'}`}
           >
            <td
            className={classes}>
                <Typography
                variant='small'
                color='white'
                >
                    {names}
                </Typography>
            </td>
             <td
             className={classes}>
                <Typography
                variant='small'
                color='white'
                >
                 {role}
                </Typography>
             </td>
             <td
             className={classes}>
                <Typography
                variant='small'
                color='white'
                >
                 {date}
                </Typography>
             </td>
             <td className={classes}>
                
                <Typography
                variant='small'
                color='white'
                className={`font-medium flex items-center text[14px] gap-2 ${StatusColor}`}>
                    <span className={`inline-block h-2 w-2 rounded-full ${status === "Accepted" ?
                    "bg-green-500":status==="Pending" ? "bg-yellow-500" : "bg-red-500"
                }`}></span>
                 {status}
                </Typography>
             </td>
             <td
             className={classes}>
                <Typography
                variant='small'
                color='white'
                className={`${StatusColor} `}>
                 {liking}
                </Typography>
             </td>
             <td
             className={classes}>
                <Typography
                variant='small'
                color='white'
                className={Report}
            >
                 {report}
                </Typography>
             </td>
           </tr>
          
       </>

        )})}
        </tbody>
    </table>
</Card>    
)}


export default ProgressTable;




















































// const NewTable = () =>{

// return (
// <div className="bg-black w-[100%] min-h-screen overflow-hidden">
// <table className="border-2 border-[#fff] mt-10 ml-10 w-[70%]">
// <thead>
//   <tr className="bg-[#0a0b0c] w-[100%]">
    
//     </tr>
//     <tr>
//         <td className="text-white">Full names</td>
//         <td className="text-white">Role</td>
//         <td className="text-white">Date</td>
//         <td className="text-white">Status</td>
//         <td className="text-white">Liked</td>
//         <td className="text-white">Reported</td>
//     </tr>
// </thead>

// </table>


// </div>

// )}


// export default NewTable;