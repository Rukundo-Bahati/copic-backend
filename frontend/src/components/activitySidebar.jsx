
const MultiStepProgressBar = () => {
  return (
    <div className="flex w-auto flex-col h-auto bg-[#0A0B0C] rounded-md pb-4 pt-3 pl-4 pr-4 gap-3 items-center justify-center">
      {/* Sidebar */}
      <div className="text-white  flex flex-col w-64 gap-1">
        <h2 className="text-gray-400 font-bold">Activity History</h2>
        <p className="">Details about the steps will go here.</p>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 flex flex-col items-center relative ">
        <div className="flex flex-col items-center">
          {/* Step 1 */}
          <div className="relative flex items-center ">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Feb 2022</p>
                <p className="text-white">Details about this step go here.</p>
              </div>
            </div>
            <div className="absolute w-1 bg-blue-500 top-10 left-1/2 transform -translate-x-[125px] h-14" />
          </div>
      
          {/* Step 2 */}
          <div className="relative flex items-center mt-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Feb 2022</p>
                <p className="text-white">Details about this step go here.</p>
              </div>
            </div>
            <div className="absolute w-1 bg-blue-500 top-10 left-1/2 transform -translate-x-[125px] h-14" />
          </div>

          {/* Step 3 */}
          <div className="relative flex items-center mt-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Mar 2022</p>
                <p className="text-white">Details about this step go here.</p>
              </div>
            </div>
            <div className="absolute w-1 bg-blue-500 top-10 left-1/2 transform -translate-x-[125px] h-14" />
          </div>

          {/* Step 4 */}
          <div className="relative flex items-center mt-10">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                
              </div>
              <div className="ml-4">
                <p className="text-gray-400 text-sm">Apr 2022</p>
                <p className="text-white">Details about this step go here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 w-[150px] h-10 rounded-3xl text-white flex items-center justify-center">See all</button>
    </div>
  );
};

export default MultiStepProgressBar;
