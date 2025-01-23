import Home from "@/pages/home";
import Login from "@/pages/login";
import SignUp from "@/pages/sing-up";
import type { IRoute } from "@/types";

export const route: IRoute[] = [
  {
    title: "Home",
    path: "/",
    element: <Home />,
    id: 1
  },
  {
    title: "SignUp",
    path: "/sign-up",
    element: <SignUp />,
    id: 2
  },
  {
    title: "Login",
    path: "/login",
    element: <Login />,
    id: 2
  }
];
