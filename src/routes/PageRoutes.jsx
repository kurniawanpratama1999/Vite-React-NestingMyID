import { Route } from "react-router";

// PAGES
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Profile from "../pages/auth-Profile/Profile";
import ChangeName from "../pages/auth-Profile/auth-ChangeName/ChangeName";
import ChangeUsername from "../pages/auth-Profile/auth-ChangeUsername/ChangeUsername";
import ChangeEmail from "../pages/auth-Profile/auth-ChangeEmail/ChangeEmail";
import ChangePassword from "../pages/auth-Profile/auth-verify-ChangePassword/ChangePassword";
import RequsetActivation from "../pages/auth-RequestActivation/RequestActivation";
import CreateAndUpdate from "../pages/auth-verify-CreateAndUpdate/CreateAndUpdate";
import Collection from "../pages/auth-Collection/Collection";
import UrlCollection from "../pages/auth-verify-UrlCollection/UrlCollection";
import VerifyEmailAuth from "../pages/auth-VerifyEmail/VerifyEmailAuth";
import VerifyEmailAll from "../pages/VerifyEmail/VerifyEmailAll";
import NotificationAfterRegister from "../pages/auth-NotificationAfterRegister/NotificationAfterRegister";
import Logout from "../pages/auth-Logout/Logout";
import { ProfileProvider } from "../contexts/Contexts";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";

export const routeCollection = [
  { path: "", element: <Home />, isAuth: false, isVerify: false },
  { path: "about", element: <About />, isAuth: false, isVerify: false },
  { path: "register", element: <Register />, isAuth: false, isVerify: false },
  { path: "login", element: <Login />, isAuth: false, isVerify: false },
  {
    path: "profile",
    element: (
      <ProfileProvider>
        <Profile />
      </ProfileProvider>
    ),
    isAuth: true,
    isVerify: false,
  },
  { path: "/profile/change-name", element: <ChangeName />, isAuth: true, isVerify: false },
  { path: "/profile/change-username", element: <ChangeUsername />, isAuth: true, isVerify: false },
  { path: "/profile/change-email", element: <ChangeEmail />, isAuth: true, isVerify: false },
  { path: "/profile/change-password", element: <ChangePassword />, isAuth: true, isVerify: true },
  { path: "/profile/request-activation", element: <RequsetActivation />, isAuth: false, isVerify: true },
  { path: "create", element: <CreateAndUpdate />, isAuth: true, isVerify: true },
  { path: "Update", element: <CreateAndUpdate />, isAuth: true, isVerify: true },
  { path: "collection", element: <Collection />, isAuth: true, isVerify: false },
  { path: "collection/:link", element: <UrlCollection />, isAuth: true, isVerify: true },
  { path: "email-verification/:otp_encode", element: <VerifyEmailAuth />, isAuth: true, isVerify: false },
  { path: "verify-email-all", element: <VerifyEmailAll />, isAuth: false, isVerify: false },
  {
    path: "notification-after-register",
    element: (
      <ProfileProvider>
        <NotificationAfterRegister />
      </ProfileProvider>
    ),
    isAuth: true,
    isVerify: false,
  },
  { path: "logout", element: <Logout />, isAuth: true, isVerify: false },
  { path: "forget-password", element: <ForgetPassword />, isAuth: false, isVerify: false },
];
