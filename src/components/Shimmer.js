const Shimmer = () => {
  return (
    <div>
      <div className="filter flex justify-center">
        <div className="search my-4 p-4">
          <input className="border animate-pulse border-gray-400 text-2xl" />
          <span className="px-4 py-2 m-4 rounded-4xl text-gray-300 text-xl font-bold bg-gray-300">
            LLL
          </span>
        </div>
        <div className="search text-gray-300 p-4 flex items-center">
          <button className="px-4 animate-pulse py-2 rounded-4xl text-xl font-bold bg-gray-300">
            Top Rated restaurants
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <label className="text-7xl animate-pulse animate-spin justify-center">
          ⭕
        </label>
      </div>

      <div className="shimmer-containe flex flex-wrap justify-center">
        <div className="shimmer-card animate-pulse m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card animate-pulse m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card animate-pulse m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card animate-pulse m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
        <div className="shimmer-card m-4 p-4 w-[350px] h-[360px] bg-gray-300 rounded-lg shadow-lg hover:scale-95"></div>
      </div>
    </div>
  );
};

export default Shimmer;
