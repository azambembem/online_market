// const Categories = () => {
//   return (
//     <div className="w-[90%] m-auto h-[313px] mt-12 text-[#DB4444] font-bold ">
//       Categories
//       <div className="h-[108px]">
//         <h1 className="text-[28px] font-bold text-black flex items-center">
//           Browse By Category
//         </h1>
//       </div>
//       <div className="flex flex-row gap-5">
//         <img
//           src="/images/phone.svg"
//           alt="img"
//           className="h-[160px] rounded-[4px] grid gap-2"
//         />
//         <img
//           src="/images/computers.svg"
//           alt="img"
//           className="h-[160px] rounded-[4px] grid gap-2"
//         />
//         <img
//           src="/images/watch.svg"
//           alt="img"
//           className="h-[160px] rounded-[4px] grid gap-2"
//         />
//         <img
//           src="/images/camera.svg"
//           alt="img"
//           className="h-[160px] rounded-[4px] grid gap-2"
//         />
//         <img
//           src="/images/headphone.svg"
//           alt="img"
//           className="h-[160px] rounded-[4px] grid gap-2"
//         />
//         <img
//           src="/images/gaming.svg"
//           alt="img"
//           className="h-[160px] rounded-[4px] grid gap-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default Categories;

const Categories = () => {
  return (
    <div className="w-[90%] m-auto mt-12 text-[#DB4444] font-bold">
      Categories
      <div className="h-[108px]">
        <h1 className="text-[28px] font-bold text-black flex items-center">
          Browse By Category
        </h1>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
        <div className="h-[160px] rounded-[4px] grid gap-2">
          <img
            src="/images/phone.svg"
            alt="Phones"
            className="h-full rounded-[4px]"
          />
        </div>
        <div className="h-[160px] rounded-[4px] grid gap-2">
          <img
            src="/images/computers.svg"
            alt="Computers"
            className="h-full rounded-[4px]"
          />
        </div>
        <div className="h-[160px] rounded-[4px] grid gap-2">
          <img
            src="/images/watch.svg"
            alt="Watches"
            className="h-full rounded-[4px]"
          />
        </div>
        <div className="h-[160px] rounded-[4px] grid gap-2">
          <img
            src="/images/camera.svg"
            alt="Cameras"
            className="h-full rounded-[4px]"
          />
        </div>
        <div className="h-[160px] rounded-[4px] grid gap-2">
          <img
            src="/images/headphone.svg"
            alt="Headphones"
            className="h-full rounded-[4px]"
          />
        </div>
        <div className="h-[160px] rounded-[4px] grid gap-2">
          <img
            src="/images/gaming.svg"
            alt="Gaming"
            className="h-full rounded-[4px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
