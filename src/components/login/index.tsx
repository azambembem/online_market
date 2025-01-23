import type { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Login: FC = () => {
  return (
    <div className="flex h-[781px] w-[90%] mt-[100px] m-auto">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <img
          src="/images/sing_up_img.svg"
          alt="Sign Up"
          className="rounded-lg h-[781px] object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-20 ">
        <h1 className="text-3xl font-bold mb-8">Log in to Exclusive</h1>
        <p className="text-black mb-16">Enter your details below</p>
        <div className="grid gap-5">
          <Input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-sm mb-4"
          />
          <Input
            type="email"
            placeholder="Email or Phone Number"
            className="w-full p-3 border border-gray-300 rounded-sm mb-4"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-sm mb-6"
          />
          <div className="flex flex-row justify-between">
            <Button
              variant={"destructive"}
              type="submit"
              className="w-[143px] text-white py-3 rounded-sm mb-4"
            >
              Login
            </Button>
            <p className="text-[#DB4444]">Forget Password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
