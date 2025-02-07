// const Body = () => {
//   return (
//     <div className="p-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div className="relative aspect-square bg-black rounded-lg overflow-hidden">
//           <img
//             src="/images/play_station.svg"
//             alt="PlayStation 5"
//             className="w-[511px] h-[511px] object-cover mt-[89px] ml-12"
//           />
//           <h2 className="absolute bottom-32 left-8 text-2xl font-bold text-white">
//             PlayStation 5
//           </h2>
//           <p className="absolute bottom-24 left-8 mt-[20px] text-sm text-gray-300 leading-tight">
//             Black and White version of the PS5
//           </p>
//           <span className="absolute bottom-16 left-8 text-sm text-white">
//             Shop Now
//           </span>
//         </div>

//         <div className="grid grid-rows-2 grid-cols-2 gap-4">
//           <div className="relative bg-black rounded-lg overflow-hidden col-span-2">
//             <img
//               src="/images/women.svg"
//               alt="women"
//               className="w-[570px] h-[284px] ml-20"
//             />
//             <h3 className="absolute bottom-32 left-4 text-lg font-bold text-white">
//               Women's Collections
//             </h3>
//             <p className="absolute bottom-24 left-4 text-xs text-gray-300">
//               Featured women collections that.
//             </p>
//             <span className="absolute bottom-16 left-4 text-sm text-white">
//               Shop Now
//             </span>
//           </div>

//           <div className="relative bg-black rounded-lg overflow-hidden">
//             <img
//               src="/images/speaker.svg"
//               alt="Speakers"
//               className="w-[270px] h-[264px] mt-4 ml-3"
//             />
//             <h3 className="absolute bottom-20 left-4 text-lg font-bold text-white">
//               Speakers
//             </h3>
//             <p className="absolute bottom-16 left-4 text-xs text-gray-300">
//               Amazon wireless speakers
//             </p>
//             <span className="absolute bottom-8 left-4 text-sm text-white">
//               Shop Now
//             </span>
//           </div>

//           <div className="relative bg-black rounded-lg overflow-hidden">
//             <img
//               src="/images/gucci.svg"
//               alt="Perfume"
//               className="w-[270px] h-[264px] mt-4 ml-3"
//             />
//             <h3 className="absolute bottom-20 left-4 text-lg font-bold text-white">
//               Perfume
//             </h3>
//             <p className="absolute bottom-16 left-4 text-xs text-gray-300">
//               GUCCI INTENSE OUD EDP
//             </p>
//             <span className="absolute bottom-8 left-4 text-sm text-white">
//               Shop Now
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Body;

const Body = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* PlayStation 5 */}
        <div className="relative aspect-square bg-black rounded-lg overflow-hidden flex justify-center items-center">
          <img
            src="/images/play_station.svg"
            alt="PlayStation 5"
            className="w-full h-auto sm:w-[400px] md:w-[511px] object-cover"
          />
          <h2 className="absolute bottom-10 left-4 sm:bottom-32 sm:left-8 text-xl sm:text-2xl font-bold text-white">
            PlayStation 5
          </h2>
          <p className="absolute bottom-6 left-4 sm:bottom-24 sm:left-8 text-xs sm:text-sm text-gray-300 leading-tight">
            Black and White version of the PS5
          </p>
          <span className="absolute bottom-2 left-4 sm:bottom-16 sm:left-8 text-sm text-white">
            Shop Now
          </span>
        </div>

        {/* 오른쪽 아이템 그룹 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Women's Collections */}
          <div className="relative bg-black rounded-lg overflow-hidden col-span-1 sm:col-span-2 flex justify-center items-center">
            <img
              src="/images/women.svg"
              alt="Women"
              className="w-full sm:w-[570px] h-auto object-cover"
            />
            <h3 className="absolute bottom-10 left-4 sm:bottom-32 sm:left-8 text-lg sm:text-xl font-bold text-white">
              Women's Collections
            </h3>
            <p className="absolute bottom-6 left-4 sm:bottom-24 sm:left-8 text-xs sm:text-sm text-gray-300">
              Featured women collections that.
            </p>
            <span className="absolute bottom-2 left-4 sm:bottom-16 sm:left-8 text-sm text-white">
              Shop Now
            </span>
          </div>

          {/* Speakers */}
          <div className="relative bg-black rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src="/images/speaker.svg"
              alt="Speakers"
              className="w-full sm:w-[270px] h-auto object-cover"
            />
            <h3 className="absolute bottom-6 left-4 sm:bottom-20 sm:left-8 text-lg sm:text-xl font-bold text-white">
              Speakers
            </h3>
            <p className="absolute bottom-2 left-4 sm:bottom-16 sm:left-8 text-xs sm:text-sm text-gray-300">
              Amazon wireless speakers
            </p>
            <span className="absolute bottom-1 left-4 sm:bottom-8 sm:left-8 text-sm text-white">
              Shop Now
            </span>
          </div>

          {/* Perfume */}
          <div className="relative bg-black rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src="/images/gucci.svg"
              alt="Perfume"
              className="w-full sm:w-[270px] h-auto object-cover"
            />
            <h3 className="absolute bottom-6 left-4 sm:bottom-20 sm:left-8 text-lg sm:text-xl font-bold text-white">
              Perfume
            </h3>
            <p className="absolute bottom-2 left-4 sm:bottom-16 sm:left-8 text-xs sm:text-sm text-gray-300">
              GUCCI INTENSE OUD EDP
            </p>
            <span className="absolute bottom-1 left-4 sm:bottom-8 sm:left-8 text-sm text-white">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
