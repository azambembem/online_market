import Home from "@/pages/home";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sing-up";
import CartProduct from "@/pages/cart-product";

import type { IRoute } from "@/types";
import Product from "@/pages/product";

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
  },
  {
    title: "CartProduct",
    path: "/cart-product",
    element: <CartProduct />,
    id: 3
  },
  {
    title: "Product",
    path: "/product",
    element: <Product />,
    id: 4
  }
];
