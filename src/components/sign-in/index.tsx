import { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignIn } from "@/redux/slice/auth";
import { useAuthSignInFeatures } from "./features";

const SignIn: FC = () => {
  const dispatch = useReduxDispatch();
  const { onSignIn } = useAuthSignInFeatures();
  const {
    sign_in: { email, password }
  } = useReduxSelector(({ auth }) => auth);

  const handleLogin = async () => {
    await onSignIn({ email, password });
  };

  return (
    <div className="flex h-[781px] w-[90%] mt-[100px] m-auto">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <img
          src="/images/sing_up_img.svg"
          alt="Sign In"
          className="rounded-lg h-[781px] object-cover"
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-20">
        <h1 className="text-3xl font-bold mb-8">Log in to Exclusive</h1>
        <p className="text-black mb-16">Enter your details below</p>
        <div className="grid gap-5">
          <Input
            value={email}
            onChange={(e) => dispatch(setSignIn({ email: e.target.value }))}
            type="text"
            placeholder="Email or Phone Number"
          />
          <Input
            value={password}
            onChange={(e) => dispatch(setSignIn({ password: e.target.value }))}
            type="password"
            placeholder="Password"
          />
          <Button variant="destructive" onClick={handleLogin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
