import { FC } from "react";
import { Input } from "../ui/input";
import {
  Heart,
  Search,
  ShoppingCart,
  User,
  Package,
  XCircle,
  Star,
  LogOut
} from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/index";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { logout } from "@/redux/slice/auth";
import { useReduxDispatch } from "@/hooks/useRedux";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootStore) => state.auth.user);
  const dispatch = useReduxDispatch(); // dispatch를 추가하여 로그아웃 후 상태 처리

  return (
    <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4">
      <div className="text-[20px] font-bold text-black flex items-center ml-4">
        Exclusive
      </div>

      <div className="flex gap-8 text-[16px] cursor-pointer">
        <div className="hover:underline" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="hover:underline">Contact</div>
        <div className="hover:underline">About</div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative mt-4">
          <Input
            type="text"
            placeholder="What are you looking for?"
            className="w-[250px] h-[30px] pl-4 pr-5 border border-gray-300 rounded-sm text-sm bg-[#f5f5f5] focus:outline-none"
          />
          <Search className="absolute inset-y-1.5 right-3 flex items-center w-5 h-5" />
        </div>

        <div className="flex gap-4 mt-4">
          <Heart
            onClick={() => toast("Like")}
            className="w-5 h-5 cursor-pointer"
          />
          <ShoppingCart
            onClick={() => toast("Add to Cart")}
            className="w-5 h-5 cursor-pointer"
          />
          {!user ? (
            <Button
              onClick={() => navigate("/sign-up")}
              className="hover:underline cursor-pointer"
            >
              Login
            </Button>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none">
                <Avatar>
                  <AvatarImage
                    src={user.avatar || "https://github.com/shadcn.png"}
                    alt={user.name || "User Avatar"}
                  />
                  <AvatarFallback>{user.name?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate("/account")}
                >
                  <User className="w-4 h-4" />
                  Manage My Account
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate("/orders")}
                >
                  <Package className="w-4 h-4" />
                  My Order
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate("/cancellations")}
                >
                  <XCircle className="w-4 h-4" />
                  My Cancellations
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => navigate("/reviews")}
                >
                  <Star className="w-4 h-4" />
                  My Reviews
                </DropdownMenuItem>
                {/* 메뉴 항목들 */}
                <DropdownMenuItem
                  className="flex items-center gap-2 cursor-pointer text-red-600"
                  onClick={() => {
                    dispatch(logout()); // 로그아웃 액션 호출
                    navigate("/"); // 홈으로 리다이렉트
                    toast("Successfully logged out");
                  }}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
