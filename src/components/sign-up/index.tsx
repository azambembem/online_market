import type { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const SignUp: FC = () => {
  const navigate = useNavigate();

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
        <h1 className="text-3xl font-bold mb-8">Create an account</h1>
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
          <Button
            variant={"destructive"}
            type="submit"
            className="w-full text-white py-3 rounded-sm mb-4"
          >
            Create Account
          </Button>
          <Button
            variant={"ghost"}
            className="w-full border border-gray-300 text-black bg-[#fff] py-3 rounded-sm flex items-center justify-center"
          >
            <img
              src="/icons/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </Button>
        </div>
        <p className="mt-6 text-sm text-black text-center">
          Already have an account?
          <a
            className="text-black underline ml-2 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
