// import type { FC } from "react";
// const Navbar: FC = () => {
//   return (
//     <div className="flex justify-between items-center m-auto h-[38px] w-[90%]">
//       <div className="flex gap-2 text-[20px]">
//         <img src={"/icons/logo.svg"} alt="logo" />
//       </div>
//       <div>Home</div>
//       <div>Contact</div>
//       <div>About</div>
//       <div>Sign Up</div>
//       <div>
//         <h3 className="bg-[#f5f5f5]">What are you looking for?</h3>
//       </div>
//       <div>
//         <img src={"/icons/search.svg"} alt="search" />
//       </div>
//       <div>
//         <img src={"/icons/search.svg"} alt="search" />
//       </div>
//       <div>
//         <img src={"/icons/search.svg"} alt="search" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4">
      <div className="text-[20px] font-bold text-black flex items-center">
        Exclusive
      </div>

      <div className="flex gap-8 text-[16px] cursor-pointer">
        <div className="hover:underline">Home</div>
        <div className="hover:underline">Contact</div>
        <div className="hover:underline">About</div>
        <div className="hover:underline">Sign Up</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative mt-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-[250px] h-[30px] pl-4 pr-5 border border-gray-300 rounded-sm text-sm bg-[#f5f5f5] focus:outline-none"
          />
          <img
            src={"/icons/search.svg"}
            alt="search"
            className="absolute inset-y-1.5 right-3 flex items-center w-5 h-5"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <img src={"/icons/heart.svg"} alt="heart" className="w-5 h-5" />
          <img src={"/icons/cart.svg"} alt="cart" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
