const Shimmer = () => {
  return (
    <div className="animate-pulse">
    <div className="flex justify-end gap-3 p-4 border bottom-1">
      <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
      <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
      <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
      <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
      
    </div>
    <div className=" py-5 px-5 flex justify-center border bottom-1">
      <div className="my-1 mx-2 h-8 bg-gray-300 rounded-lg w-1/2  "> </div>
    </div>
      <div className="flex flex-wrap ">
        {Array(8)
          .fill(" ")
          .map((e, index) => (
            <div
              key={index}
              className="border rounded p-1 my-2 mx-2 w-[22rem] border-gray-300"
            >
              <div className="my-2 mx-2  h-36 bg-gray-300 rounded-lg"></div>
              <div className="my-1 mx-2 h-8 bg-gray-300  rounded-lg "></div>
              <div className="my-1 mx-2 h-8 bg-gray-300  rounded-lg "></div>
              <div className="my-1 mx-2 h-8 bg-gray-300  rounded-lg "></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
