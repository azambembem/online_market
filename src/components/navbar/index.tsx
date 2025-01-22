import type { FC } from "react";
import { Input } from "../ui/input";
import { Heart, Search, ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import AuthDialog from "./auth-dialog";
import { Dialog, DialogTrigger } from "../ui/dialog";

const Navbar: FC = () => {
  return (
    <div className="flex justify-between items-center w-[90%] h-[50px] mx-auto mt-4 ">
      <div className="text-[20px] font-bold text-black flex items-center ml-4">
        Exclusive
      </div>

      <div className="flex gap-8 text-[16px] cursor-pointer">
        <div className="hover:underline">Home</div>
        <div className="hover:underline">Contact</div>
        <div className="hover:underline">About</div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="hover:underline">Sign Up</div>
          </DialogTrigger>
          <AuthDialog />
        </Dialog>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative mt-4">
          <Input // shadcn/ui 사용하기기
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
