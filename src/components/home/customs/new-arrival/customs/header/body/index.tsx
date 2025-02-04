const Body = () => {
  // const { most_popular_monthly, data };
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
          <img
            src="/images/play_station.svg"
            alt="PlayStation 5"
            className="w-[511px] h-[511px] object-cover mt-[89px] ml-12"
          />
          <h2 className="absolute bottom-32 left-8 text-2xl font-bold text-white">
            PlayStation 5
          </h2>
          <p className="absolute bottom-24 left-8 mt-[20px] text-sm text-gray-300 leading-tight">
            Black and White version of the PS5
          </p>
          <span className="absolute bottom-16 left-8 text-sm text-white">
            Shop Now
          </span>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <div className="relative bg-black rounded-lg overflow-hidden col-span-2">
            <img
              src="/images/women.svg"
              alt="women"
              className="w-[570px] h-[284px] ml-20"
            />
            <h3 className="absolute bottom-32 left-4 text-lg font-bold text-white">
              Women's Collections
            </h3>
            <p className="absolute bottom-24 left-4 text-xs text-gray-300">
              Featured women collections that.
            </p>
            <span className="absolute bottom-16 left-4 text-sm text-white">
              Shop Now
            </span>
          </div>

          <div className="relative bg-black rounded-lg overflow-hidden">
            <img
              src="/images/speaker.svg"
              alt="Speakers"
              className="w-[270px] h-[264px] mt-4 ml-3"
            />
            <h3 className="absolute bottom-20 left-4 text-lg font-bold text-white">
              Speakers
            </h3>
            <p className="absolute bottom-16 left-4 text-xs text-gray-300">
              Amazon wireless speakers
            </p>
            <span className="absolute bottom-8 left-4 text-sm text-white">
              Shop Now
            </span>
          </div>

          <div className="relative bg-black rounded-lg overflow-hidden">
            <img
              src="/images/gucci.svg"
              alt="Perfume"
              className="w-[270px] h-[264px] mt-4 ml-3"
            />
            <h3 className="absolute bottom-20 left-4 text-lg font-bold text-white">
              Perfume
            </h3>
            <p className="absolute bottom-16 left-4 text-xs text-gray-300">
              GUCCI INTENSE OUD EDP
            </p>
            <span className="absolute bottom-8 left-4 text-sm text-white">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
