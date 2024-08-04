import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "@/components/features/Layout";
import { CategoryPage } from "@/pages/Category";
import { GoodsDetailPage } from "@/pages/Goods/Detail";
import { HomePage } from "@/pages/Home";
import { JoinPage } from "@/pages/Join";
import { KakaoLogin } from "@/pages/Login";
import { MyAccountPage } from "@/pages/MyAccount";
import { OrderPage } from "@/pages/Order";

import { PrivateRoute } from "./components/PrivateRoute";
import { RouterPath } from "./path";

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      {
        path: RouterPath.home,
        element: <HomePage />,
      },
      {
        path: RouterPath.category,
        element: <CategoryPage />,
      },
      {
        path: RouterPath.productsDetail,
        element: <GoodsDetailPage />,
      },
      {
        path: RouterPath.myAccount,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.myAccount,
            element: <MyAccountPage />,
          },
        ],
      },
      {
        path: RouterPath.order,
        element: <PrivateRoute />,
        children: [
          {
            path: RouterPath.order,
            element: <OrderPage />,
          },
        ],
      },
      {
        path: RouterPath.notFound,
        element: <Navigate to={RouterPath.home} />,
      },
    ],
  },
  {
    path: RouterPath.join,
    element: <JoinPage />,
  },
  {
    path: RouterPath.login,
    element: <KakaoLogin />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
