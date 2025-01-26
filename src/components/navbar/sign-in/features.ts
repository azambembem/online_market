// import { useReduxDispatch } from "@/hooks/useRedux";
// import { setSignIn } from "@/redux/slice/auth";
// import axios from "axios";

// type ON_SING_IN = () => Promise<void>;

// type AuthDialogFeatures = {
//   onSignIn: ON_SING_IN;
// };

// // type AuthDialogFeatures = {
// //   onSignIn: (data: { email: string; password: string }) => Promise<void>;
// //   onSignUp: (data: { name: string; email: string; password: string }) => Promise<void>;
// // };

// export const useAuthDialogFeatures = (): AuthDialogFeatures => {
//   const dispatch = useReduxDispatch();

//   const onSignIn = async (data: { email: string; password: string }) => {
//     dispatch(setSignIn({ state: "loading" }));
//     try {
//       const response = await axios.post("http://localhost:8080/auth/sign-in", data);
//       console.log("Login Successful:", response.data);
//       dispatch(setSignIn({ state: null }));
//       alert("Logged successfully");
//     } catch (error) {
//       console.error("Login Failed:", error);
//       dispatch(setSignIn({ state: "error" }));
//     }
//   };



//   return {
//     onSignIn,
//   };
// };


import { useReduxDispatch } from "@/hooks/useRedux";
import { setSignIn } from "@/redux/slice/auth";
import axios from "axios";

type AuthDialogFeatures = {
  onSignIn: (data: { number: string; password: string }) => Promise<void>;
};

export const useAuthDialogFeatures = (): AuthDialogFeatures => {
  const dispatch = useReduxDispatch();

  const onSignIn = async (data: { number: string; password: string }) => {
    dispatch(setSignIn({ state: "loading" }));
    try {
      const response = await axios.post("http://localhost:8080/auth/sign-in", data);
      console.log("Login Successful:", response.data);
      dispatch(setSignIn({ state: null }));
      alert("Logged in successfully!");
    } catch (error) {
      console.error("Login Failed:", error);
      dispatch(setSignIn({ state: "error" }));
    }
  };

  return {
    onSignIn,
  };
};
