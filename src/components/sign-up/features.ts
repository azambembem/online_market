import { useReduxDispatch } from "@/hooks/useRedux";
import { setSignUp } from "@/redux/slice/auth";
import axios from "axios";

type AuthSignInFeatures = {
  onSignUp: (data: { name: string; email: string; password: string }) => Promise<void>;
};

export const useAuthSignUpFeatures = (): AuthSignInFeatures => {
  const dispatch = useReduxDispatch();

  const onSignUp = async (data: { name: string; email: string; password: string }) => {
    dispatch(setSignUp({ state: "loading" }));
    try {
      const response = await axios.post("http://localhost:8080/auth/sign-up", data); // URL 수정
      
      console.log("Sign-Up Successful:", response.data);
      dispatch(setSignUp({ state: null }));
      alert("Account created successfully!");
    } catch (error) {
      console.error("Sign-Up Failed:", error);
      dispatch(setSignUp({ state: "error" }));
      alert("Failed to create account. Please try again."); // 실패 알림 추가
    }
  };

  return {
    onSignUp,
  };
};
