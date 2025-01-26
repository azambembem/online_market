import Home from "@/pages/home";
import SignIn from "@/pages/sign-in";
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
    title: "SignIn",
    path: "/sign-in",
    element: <SignIn />,
    id: 2
  }
];
