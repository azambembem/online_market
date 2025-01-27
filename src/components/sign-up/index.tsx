import { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignUp } from "@/redux/slice/auth";
import { useAuthSignUpFeatures } from "./features";
import { useNavigate } from "react-router-dom";

const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { onSignUp } = useAuthSignUpFeatures();
  const {
    sign_up: { name, email, password }
  } = useReduxSelector(({ auth }) => auth);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields."); // 필수 필드 확인 추가
      return;
    }
    try {
      await onSignUp({ name, email, password });
      navigate("/sign-in"); // 로그인 성공시 sign-in ��이지로 이���
    } catch (error) {
      console.error("Sign-Up Failed:", error);
      alert("Failed to create account. Please try again."); // 실�� 알�� 추가
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSignUp(); // Enter 키로 제출 가능
    }
  };

  return (
    <div className="flex h-[781px] w-[90%] mt-[100px] m-auto">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <img
          src="/images/sing_up_img.svg"
          alt="Sign Up"
          className="rounded-lg h-[781px] object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-20">
        <h1 className="text-3xl font-bold mb-8">Create an account</h1>
        <p className="text-black mb-16">Enter your details below</p>
        <div className="grid gap-5">
          <Input
            value={name}
            onChange={(e) => dispatch(setSignUp({ name: e.target.value }))}
            onKeyDown={handleKeyDown} // Enter 키 이벤트 추가
            type="text"
            placeholder="Name"
          />
          <Input
            value={email}
            onChange={(e) => dispatch(setSignUp({ email: e.target.value }))}
            onKeyDown={handleKeyDown} // Enter 키 이벤트 추가
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(e) => dispatch(setSignUp({ password: e.target.value }))}
            onKeyDown={handleKeyDown} // Enter 키 이벤트 추가
            type="password"
            placeholder="Password"
          />
          <Button variant="destructive" onClick={handleSignUp}>
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
            onClick={() => navigate("/sign-in")}
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
