import {
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import CategoryNewsContent from "../Pages/CategoryNewsContent";
import SignUpPage from "../Pages/SignUpPage";
import AuthLayout from "../Layouts/AuthLayout";
import LoginPage from "../Pages/LoginPage";
import NewsContent from "../Pages/NewsContent";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNewsContent></CategoryNewsContent>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ]
  },
  {
    path: "/news/:id",
    element: <PrivateRoute><NewsContent></NewsContent></PrivateRoute>,
    loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:"/auth/register",
        element: <SignUpPage></SignUpPage>
      },
      {
        path:"/auth/login",
        element: <LoginPage></LoginPage>
      }
    ],
  }
]);

export default router;