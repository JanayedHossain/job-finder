import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Homepage from "../pages/homepage/Homepage";
import CompanyDetails from "../pages/company-details/CompanyDetails";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/register/SignUp";
import ForgetPassword from "../pages/forget-password/ForgetPassword";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../provider/PrivateRoute";
import UpdateProfile from "../pages/update-profile/UpdateProfile";
import AboutUs from "../pages/about-us/About";
import Loading from "../components/loading/Loading";
import Contact from "../pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Homepage,
      },
      {
        path: "/company-details/:id",
        element: (
          <PrivateRoute>
            <CompanyDetails />{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("/jobs.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        Component: AboutUs,
        loader: () => fetch("/jobs.json"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
]);
