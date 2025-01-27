// import type { FC } from "react";
// import { Input } from "../ui/input";
// import { Heart, Search, ShoppingCart } from "lucide-react";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// const Navbar: FC = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4 ">
//       <div className="text-[20px] font-bold text-black flex items-center ml-4">
//         Exclusive
//       </div>

//       <div className="flex gap-8 text-[16px] cursor-pointer">
//         <div className="hover:underline" onClick={() => navigate("/")}>
//           Home
//         </div>
//         <div className="hover:underline">Contact</div>
//         <div className="hover:underline">About</div>

//         <div
//           onClick={() => navigate("/sign-up")}
//           className="hover:underline cursor-pointer"
//         >
//           Sign Up
//         </div>
//       </div>

//       <div className="flex items-center gap-6">
//         <div className="relative mt-4">
//           <Input // shadcn/ui 사용하기기
//             type="text"
//             placeholder="What are you looking for?"
//             className="w-[250px] h-[30px] pl-4 pr-5 border border-gray-300 rounded-sm text-sm bg-[#f5f5f5] focus:outline-none"
//           />

//           <Search className="absolute inset-y-1.5 right-3 flex items-center w-5 h-5" />
//         </div>
//         <div className="flex gap-4 mt-4">
//           <Heart
//             onClick={() => toast("Like")}
//             className="w-5 h-5 cursor-pointer"
//           />
//           <ShoppingCart
//             onClick={() => toast("Add to Cart")}
//             className="w-5 h-5 cursor-pointer"
//           />
//           <Avatar>
//             <AvatarImage src="https://github.com/shadcn.png" />
//             <AvatarFallback>CN</AvatarFallback>
//           </Avatar>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import type { FC } from "react";
// import { Input } from "../ui/input";
// import { Heart, Search, ShoppingCart } from "lucide-react";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"; // React Auth Kit hook
// // import { useReduxSelector } from "@/hooks/useRedux"; // To access Redux state
// //
// const Navbar: FC = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useIsAuthenticated(); // Checks if the user is logged in
//   // const user = useReduxSelector((state) => state.auth.user); // Get user details from Redux

//   return (
//     <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4">
//       {/* Logo */}
//       <div className="text-[20px] font-bold text-black flex items-center ml-4">
//         Exclusive
//       </div>

//       {/* Navigation Links */}
//       <div className="flex gap-8 text-[16px] cursor-pointer">
//         <div className="hover:underline" onClick={() => navigate("/")}>
//           Home
//         </div>
//         <div className="hover:underline">Contact</div>
//         <div className="hover:underline">About</div>
//         {!isAuthenticated ? ( // Show "Sign Up" if not logged in
//           <div
//             onClick={() => navigate("/sign-up")}
//             className="hover:underline cursor-pointer"
//           >
//             Sign Up
//           </div>
//         ) : (
//           <Avatar>
//             <AvatarImage
//               src={user?.avatar || "https://github.com/shadcn.png"}
//             />
//             <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
//           </Avatar>
//         )}
//       </div>

//       {/* Search Bar and Icons */}
//       <div className="flex items-center gap-6">
//         {/* Search Input */}
//         <div className="relative mt-4">
//           <Input
//             type="text"
//             placeholder="What are you looking for?"
//             className="w-[250px] h-[30px] pl-4 pr-5 border border-gray-300 rounded-sm text-sm bg-[#f5f5f5] focus:outline-none"
//           />
//           <Search className="absolute inset-y-1.5 right-3 flex items-center w-5 h-5" />
//         </div>

//         {/* Icons */}
//         <div className="flex gap-4 mt-4">
//           <Heart
//             onClick={() => toast("Like")}
//             className="w-5 h-5 cursor-pointer"
//           />
//           <ShoppingCart
//             onClick={() => toast("Add to Cart")}
//             className="w-5 h-5 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import type { FC } from "react";
// import { Input } from "../ui/input";
// import { Heart, Search, ShoppingCart } from "lucide-react";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"; // 로그인 여부 확인
// import useAuthUser from "react-auth-kit/hooks/useAuthUser"; // 유저 정보 가져오기

// const Navbar: FC = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useIsAuthenticated(); // 로그인 상태 확인
//   const authUser = useAuthUser(); // 유저 정보 가져오기
//   const user = authUser(); // 로그인된 유저 정보 (null일 수 있음)

//   return (
//     <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4">
//       {/* 로고 */}
//       <div className="text-[20px] font-bold text-black flex items-center ml-4">
//         Exclusive
//       </div>

//       {/* 네비게이션 링크 */}
//       <div className="flex gap-8 text-[16px] cursor-pointer">
//         <div className="hover:underline" onClick={() => navigate("/")}>
//           Home
//         </div>
//         <div className="hover:underline">Contact</div>
//         <div className="hover:underline">About</div>
//         {!isAuthenticated ? (
//           // 로그인하지 않은 경우 "Sign Up" 표시
//           <div
//             onClick={() => navigate("/sign-up")}
//             className="hover:underline cursor-pointer"
//           >
//             Sign Up
//           </div>
//         ) : (
//           // 로그인한 경우 Avatar 표시
//           <div className="cursor-pointer" onClick={() => navigate("/profile")}>
//             <Avatar>
//               <AvatarImage
//                 src={user?.avatar || "https://github.com/shadcn.png"} // 유저 이미지 또는 기본 이미지
//               />
//               <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
//             </Avatar>
//           </div>
//         )}
//       </div>

//       {/* 검색창 및 아이콘 */}
//       <div className="flex items-center gap-6">
//         {/* 검색 입력 */}
//         <div className="relative mt-4">
//           <Input
//             type="text"
//             placeholder="What are you looking for?"
//             className="w-[250px] h-[30px] pl-4 pr-5 border border-gray-300 rounded-sm text-sm bg-[#f5f5f5] focus:outline-none"
//           />
//           <Search className="absolute inset-y-1.5 right-3 flex items-center w-5 h-5" />
//         </div>

//         {/* 아이콘 */}
//         <div className="flex gap-4 mt-4">
//           <Heart
//             onClick={() => toast("Like")}
//             className="w-5 h-5 cursor-pointer"
//           />
//           <ShoppingCart
//             onClick={() => toast("Add to Cart")}
//             className="w-5 h-5 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import { FC } from "react";
// import { Input } from "../ui/input";
// import { Heart, Search, ShoppingCart } from "lucide-react";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated"; // 로그인 상태 확인을 위한 hook
// import { useSelector } from "react-redux"; // Redux 상태를 가져오는 hook

// const Navbar: FC = () => {
//   const navigate = useNavigate();
//   const isAuthenticated = useIsAuthenticated(); // 로그인 상태 확인
//   const user = useSelector(
//     (state: { auth: { user: string } }) => state.auth.user
//   ); // user 정보 가져오기

//   return (
//     <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4">
//       {/* Logo */}
//       <div className="text-[20px] font-bold text-black flex items-center ml-4">
//         Exclusive
//       </div>

//       {/* Navigation Links */}
//       <div className="flex gap-8 text-[16px] cursor-pointer">
//         <div className="hover:underline" onClick={() => navigate("/")}>
//           Home
//         </div>
//         <div className="hover:underline">Contact</div>
//         <div className="hover:underline">About</div>
//         {!isAuthenticated ? ( // 로그인 안 되어 있으면 "Sign Up" 버튼 표시
//           <div
//             onClick={() => navigate("/sign-up")}
//             className="hover:underline cursor-pointer"
//           >
//             Sign Up
//           </div>
//         ) : (
//           // 로그인 되어 있으면 User Avatar 아이콘 표시
//           <Avatar>
//             <AvatarImage
//               src={user?.avatar || "https://github.com/shadcn.png"}
//             />
//             <AvatarFallback>{user?.name?.charAt(0) || "U"}</AvatarFallback>
//           </Avatar>
//         )}
//       </div>

//       {/* Search Bar and Icons */}
//       <div className="flex items-center gap-6">
//         {/* Search Input */}
//         <div className="relative mt-4">
//           <Input
//             type="text"
//             placeholder="What are you looking for?"
//             className="w-[250px] h-[30px] pl-4 pr-5 border border-gray-300 rounded-sm text-sm bg-[#f5f5f5] focus:outline-none"
//           />
//           <Search className="absolute inset-y-1.5 right-3 flex items-center w-5 h-5" />
//         </div>

//         {/* Icons */}
//         <div className="flex gap-4 mt-4">
//           <Heart
//             onClick={() => toast("Like")}
//             className="w-5 h-5 cursor-pointer"
//           />
//           <ShoppingCart
//             onClick={() => toast("Add to Cart")}
//             className="w-5 h-5 cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { FC } from "react";
import { Input } from "../ui/input";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux"; // Redux 상태를 가져오는 hook
import { RootStore } from "../../redux/index"; // RootStore 타입 가져오기
import { Button } from "../ui/button";

const Navbar: FC = () => {
  const navigate = useNavigate();

  // Redux에서 사용자 정보를 가져오기
  const user = useSelector((state: RootStore) => state.auth.user);

  return (
    <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4">
      {/* Logo */}
      <div className="text-[20px] font-bold text-black flex items-center ml-4">
        Exclusive
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-[16px] cursor-pointer">
        <div className="hover:underline" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="hover:underline">Contact</div>
        <div className="hover:underline">About</div>
      </div>

      {/* Search Bar and Icons */}
      <div className="flex items-center gap-6">
        {/* Search Input */}
        <div className="relative mt-4">
          <Input
            type="text"
            placeholder="What are you looking for?"
            className="w-[250px] h-[30px] pl-4 pr-5 border border-gray-300 rounded-sm text-sm bg-[#f5f5f5] focus:outline-none"
          />
          <Search className="absolute inset-y-1.5 right-3 flex items-center w-5 h-5" />
        </div>

        {/* Icons */}
        <div className="flex gap-4 mt-4">
          <Heart
            onClick={() => toast("Like")}
            className="w-5 h-5 cursor-pointer"
          />
          <ShoppingCart
            onClick={() => toast("Add to Cart")}
            className="w-5 h-5 cursor-pointer"
          />
          {!user ? ( // 로그인 안 되어 있으면 "Sign Up" 버튼 표시
            <Button
              onClick={() => navigate("/sign-up")}
              className="hover:underline cursor-pointer"
            >
              Login
            </Button>
          ) : (
            // 로그인 되어 있으면 User Avatar 아이콘 표시
            <Avatar>
              <AvatarImage
                src={user.avatar || "https://github.com/shadcn.png"}
                alt={user.name || "User Avatar"}
              />
              <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
            </Avatar>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
