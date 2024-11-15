

const Progress= () =>{

    return (
       <div className="my-10 w-[100%]  ">
       <div className="flex flex-col  w-[100%] ml-20">
           <div className="w-[50%]  flex flex-col  ">
            <p className="text-[#28c541]  text-[75%] font-bold self-end mb-5">75% clients Booked</p>
               <div className="bg-[#d9d9d9] w-[100%]  rounded-full  "><div className="bg-[#28c541] rounded-full w-[75%]">&nbsp;</div></div>
           </div>
           <div className="flex flex-col  w-[60%] ">
           <p className="text-[#Af1e30]  text-[75%] font-bold self-end mb-5">84% liked works</p>
               <div className="bg-[#d9d9d9] w-[100%] rounded-full "><div className="bg-[#Af1e30] rounded-full w-[84%]">&nbsp;</div></div>
           </div>
           <div className="flex flex-col w-[70%] ">
           <p className="text-[#6193dd]  text-[75%] font-bold self-end mb-5">90% Total Clients</p>
               <div className="bg-[#d9d9d9] w-[100%] rounded-full"><div className="bg-[#6193dd] rounded-full w-[90%]">&nbsp;</div></div>
           </div>
       </div>
       </div> 
    )
}

export default Progress;