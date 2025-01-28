import { useReduxDispatch } from "@/hooks/useRedux";
import { setSignIn, setUser } from "@/redux/slice/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type AuthSignInFeatures = {
  onSignIn: (data: { email: string; password: string }) => Promise<void>;
};

export const useAuthSignInFeatures = (): AuthSignInFeatures => {
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();

  const onSignIn = async (data: { email: string; password: string }) => {
    dispatch(setSignIn({ state: "loading" }));
    try {
      const response = await axios.post("http://localhost:8080/auth/sign-in", data);
      const userData = response.data;
      
      // Store user data in Redux
      dispatch(setUser({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        avatar: userData.avatar
      }));
      
      dispatch(setSignIn({ state: null }));
      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      console.error("Login Failed:", error);
      dispatch(setSignIn({ state: "error" }));
      alert("Login failed. Please check your credentials.");
    }
  };

  return {
    onSignIn,
  };
};