// import type { FC } from "react";
// import { Input } from "../../../ui/input";
// import { Button } from "../../../ui/button";
// import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
// import { setSignIn } from "@/redux/slice/auth";

// const SignIn: FC = () => {
//   const dispatch = useReduxDispatch();
//   const {
//     sign_in: { number }
//   } = useReduxSelector(({ auth }) => auth);

//   return (
//     <div className="flex h-[781px] w-[90%] mt-[100px] m-auto">
//       <div className="flex-1 flex items-center justify-center bg-gray-100">
//         <img
//           src="/images/sing_up_img.svg"
//           alt="Sign Up"
//           className="rounded-lg h-[781px] object-cover"
//         />
//       </div>

//       <div className="flex-1 flex flex-col justify-center px-20 ">
//         <h1 className="text-3xl font-bold mb-8">Log in to Exclusive</h1>
//         <p className="text-black mb-16">Enter your details below</p>
//         <div className="grid gap-5">
//           <Input
//             value={number}
//             onChange={(e) => dispatch(setSignIn({ number: e.target.value }))}
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-4"
//           />
//           <Input
//             type="email"
//             placeholder="Email or Phone Number"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-4"
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-6"
//           />
//           <div className="flex flex-row justify-between">
//             <Button
//               variant={"destructive"}
//               type="submit"
//               className="w-[143px] text-white py-3 rounded-sm mb-4"
//             >
//               Login
//             </Button>
//             <p className="text-[#DB4444]">Forget Password?</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

// SignIn.tsx

// import { FC } from "react";
// import { Input } from "../../ui/input";
// import { Button } from "../../ui/button";
// import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
// import { setSignIn } from "@/redux/slice/auth";
// import axios from "axios";

// const SignIn: FC = () => {
//   const dispatch = useReduxDispatch();
//   const {
//     sign_in: { number, password }
//   } = useReduxSelector(({ auth }) => auth);

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("/api/sign-in", { number, password });
//       console.log("Login Success:", response.data);
//     } catch (error) {
//       console.error("Login Error:", error);
//     }
//   };

//   return (
//     <div className="flex h-[781px] w-[90%] mt-[100px] m-auto">
//       <div className="flex-1 flex items-center justify-center bg-gray-100">
//         <img
//           src="/images/sing_up_img.svg"
//           alt="Sign In"
//           className="rounded-lg h-[781px] object-cover"
//         />
//       </div>

//       <div className="flex-1 flex flex-col justify-center px-20">
//         <h1 className="text-3xl font-bold mb-8">Log in to Exclusive</h1>
//         <p className="text-black mb-16">Enter your details below</p>
//         <div className="grid gap-5">
//           <Input
//             value={number}
//             onChange={(e) => dispatch(setSignIn({ number: e.target.value }))}
//             type="text"
//             placeholder="Email or Phone Number"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-4"
//           />
//           <Input
//             value={password}
//             onChange={(e) => dispatch(setSignIn({ password: e.target.value }))}
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-6"
//           />
//           <div className="flex flex-row justify-between">
//             <Button
//               variant={"destructive"}
//               type="button"
//               onClick={handleLogin}
//               className="w-[143px] text-white py-3 rounded-sm mb-4"
//             >
//               Login
//             </Button>
//             <p className="text-[#DB4444] cursor-pointer">Forget Password?</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;

import { FC } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignIn } from "@/redux/slice/auth";
import { useAuthDialogFeatures } from "./features";

const SignIn: FC = () => {
  const dispatch = useReduxDispatch();
  const { onSignIn } = useAuthDialogFeatures();
  const {
    sign_in: { number, password }
  } = useReduxSelector(({ auth }) => auth);

  const handleLogin = async () => {
    await onSignIn({ number, password });
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
            value={number}
            onChange={(e) => dispatch(setSignIn({ number: e.target.value }))}
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
