import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Coverage from "../Page/Coverage/Coverage";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Page/Auth/Login";
import Register from "../Page/Auth/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Page/Rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "/coverage",
        Component: Coverage,
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
