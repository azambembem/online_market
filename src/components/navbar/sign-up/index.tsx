// import type { FC } from "react";
// import { Input } from "../../../ui/input";
// import { Button } from "../../../ui/button";
// import { useNavigate } from "react-router-dom";

// const SignUp: FC = () => {
//   const navigate = useNavigate();

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
//         <h1 className="text-3xl font-bold mb-8">Create an account</h1>
//         <p className="text-black mb-16">Enter your details below</p>
//         <div className="grid gap-5">
//           <Input
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
//           <Button
//             variant={"destructive"}
//             type="submit"
//             className="w-full text-white py-3 rounded-sm mb-4"
//           >
//             Create Account
//           </Button>
//           <Button
//             variant={"ghost"}
//             className="w-full border border-gray-300 text-black bg-[#fff] py-3 rounded-sm flex items-center justify-center"
//           >
//             <img
//               src="/icons/google.svg"
//               alt="Google"
//               className="w-5 h-5 mr-2"
//             />
//             Sign up with Google
//           </Button>
//         </div>
//         <p className="mt-6 text-sm text-black text-center">
//           Already have an account?
//           <a
//             className="text-black underline ml-2 cursor-pointer"
//             onClick={() => navigate("/sign-in")}
//           >
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// auth - dialog / sign - up / index.tsx;

// SignUp.tsx
// import { FC } from "react";
// import { Input } from "../../ui/input";
// import { Button } from "../../ui/button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignUp: FC = () => {
//   const navigate = useNavigate();
//   const handleSignUp = async () => {
//     try {
//       const response = await axios.post("/api/sign-up", {
//         name: "test_name",
//         email: "test_email@example.com",
//         password: "test_password"
//       });
//       console.log("SignUp Success:", response.data);
//       navigate("/sign-in");
//     } catch (error) {
//       console.error("SignUp Error:", error);
//     }
//   };

//   return (
//     <div className="flex h-[781px] w-[90%] mt-[100px] m-auto">
//       <div className="flex-1 flex items-center justify-center bg-gray-100">
//         <img
//           src="/images/sing_up_img.svg"
//           alt="Sign Up"
//           className="rounded-lg h-[781px] object-cover"
//         />
//       </div>

//       <div className="flex-1 flex flex-col justify-center px-20">
//         <h1 className="text-3xl font-bold mb-8">Create an account</h1>
//         <p className="text-black mb-16">Enter your details below</p>
//         <div className="grid gap-5">
//           <Input
//             type="text"
//             placeholder="Name"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-4"
//           />
//           <Input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-4"
//           />
//           <Input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border border-gray-300 rounded-sm mb-6"
//           />
//           <Button
//             variant={"destructive"}
//             type="button"
//             onClick={handleSignUp}
//             className="w-full text-white py-3 rounded-sm mb-4"
//           >
//             Create Account
//           </Button>
//           <Button
//             variant={"ghost"}
//             className="w-full border border-gray-300 text-black bg-[#fff] py-3 rounded-sm flex items-center justify-center"
//           >
//             <img
//               src="/icons/google.svg"
//               alt="Google"
//               className="w-5 h-5 mr-2"
//             />
//             Sign up with Google
//           </Button>
//         </div>
//         <p className="mt-6 text-sm text-black text-center">
//           Already have an account?
//           <a
//             className="text-black underline ml-2 cursor-pointer"
//             onClick={() => navigate("/sign-in")}
//           >
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import { FC } from "react";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignUp } from "@/redux/slice/auth";
import { useAuthDialogFeatures } from "./features";
import { useNavigate } from "react-router-dom";

const SignUp: FC = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { onSignUp } = useAuthDialogFeatures();
  const {
    sign_up: { name, email, password }
  } = useReduxSelector(({ auth }) => auth);

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields."); // 필수 필드 확인 추가
      return;
    }
    await onSignUp({ name, email, password });
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
            type="text"
            placeholder="Name"
          />
          <Input
            value={email}
            onChange={(e) => dispatch(setSignUp({ email: e.target.value }))}
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(e) => dispatch(setSignUp({ password: e.target.value }))}
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
