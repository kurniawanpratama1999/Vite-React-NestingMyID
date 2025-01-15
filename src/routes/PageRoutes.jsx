import { Route } from "react-router";

// PAGES
import Home from "../pages/00-Home/Home";
import About from "../pages/01-About/About";
import Register from "../pages/02-Register/Register";
import Login from "../pages/03-Login/Login";
import Profile from "../pages/05-Profile-auth/Profile";
import ChangeName from "../pages/05.01-ChangeName-verify/ChangeName";
import ChangeUsername from "../pages/05.02-ChangeUsername-verify/ChangeUsername";
import ChangeEmail from "../pages/05.03-ChangeEmail-verify/ChangeEmail";
import ChangePassword from "../pages/05.04-ChangePassword-verify/ChangePassword";
import RequsetActivation from "../pages/05.05-RequestActivation-auth/RequsetActivation";
import CreateAndUpdate from "../pages/06-CreateAndUpdate-auth-verify/CreateAndUpdate";
import Collection from "../pages/07-Collection-auth/Collection";
import UrlCollection from "../pages/08-UrlCollection-auth-verify/UrlCollection";
import VerifyEmailAuth from "../pages/09-VerifyEmail-auth/VerifyEmailAuth";
import VerifyEmailAll from "../pages/10-VerifyEmail-all/VerifyEmailAll";
import AttentionAfterRegister from "../pages/11-AttentionAfterRegister/AttentionAfterRegister";
import Logout from "../pages/12-Logout-Auth/Logout";

export const routeCollection = [
  { path: "", element: <Home />, isAuth: false, isVerify: false },
  { path: "about", element: <About />, isAuth: false, isVerify: false },
  { path: "register", element: <Register />, isAuth: false, isVerify: false },
  { path: "login", element: <Login />, isAuth: false, isVerify: false },
  { path: "profile", element: <Profile />, isAuth: true, isVerify: false },
  { path: "/profile/change-name", element: <ChangeName />, isAuth: false, isVerify: true },
  { path: "/profile/change-username", element: <ChangeUsername />, isAuth: false, isVerify: true },
  { path: "/profile/change-email", element: <ChangeEmail />, isAuth: false, isVerify: true },
  { path: "/profile/change-password", element: <ChangePassword />, isAuth: false, isVerify: true },
  { path: "/profile/request-activation", element: <RequsetActivation />, isAuth: false, isVerify: true },
  { path: "create", element: <CreateAndUpdate />, isAuth: true, isVerify: true },
  { path: "Update", element: <CreateAndUpdate />, isAuth: true, isVerify: true },
  { path: "collection", element: <Collection />, isAuth: true, isVerify: false },
  { path: "collection/:link", element: <UrlCollection />, isAuth: true, isVerify: true },
  { path: "verify-email-auth", element: <VerifyEmailAuth />, isAuth: true, isVerify: false },
  { path: "verify-email-all", element: <VerifyEmailAll />, isAuth: false, isVerify: false },
  { path: "register/attention", element: <AttentionAfterRegister />, isAuth: false, isVerify: false },
  { path: "logout", element: <Logout />, isAuth: true, isVerify: false },
];
