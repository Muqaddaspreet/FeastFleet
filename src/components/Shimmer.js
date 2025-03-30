const Shimmer = () => {
  return (
    <div>
      <div className="filter flex justify-center">
        <div className="search my-4 p-4">
          <input className="border border-gray-400 text-2xl" />
          <span className="px-4 py-2 m-4 rounded-4xl text-gray-200 text-xl font-bold bg-gray-200">
            LLL
          </span>
        </div>
        <div className="search text-gray-200 p-4 flex items-center">
          <button className="px-4 py-2 rounded-4xl text-xl font-bold bg-gray-200">
            Top Rated restaurants
          </button>
        </div>
      </div>

      <div className="shimmer-containe flex flex-wrap justify-center">
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-200 rounded-lg shadow-lg hover:scale-95"></div>
      </div>
    </div>
  );
};

export default Shimmer;
