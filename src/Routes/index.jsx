import {
  Logout,
  LinkCollection,
  Profile,
  ProfileChangeDisplayName,
  ProfileChangeUsername,
  ProfileChangeEmail,
} from "@/Pages/Auth";

import {
  UrlCollection,
  CreateAndUpdate,
  ProfileChangePassword,
} from "@/Pages/Auth_and_Verify";

import {
  Home,
  About,
  Register,
  Login,
  ForgetPassword_InsertEmail,
  ForgetPassword_CheckUsername,
  ForgetPassword_InsertNewPassword,
} from "@/Pages/Global";

import {
  AfterRegister,
  ForgetPassword,
  RequestActivation,
  VerifyEmail,
} from "@/Pages/Notification";

const GlobalPage = [
  {
    path: "",
    element: <Home />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "about",
    element: <About />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "login",
    element: <Login />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "register",
    element: <Register />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "forget-password",
    element: <ForgetPassword_InsertEmail />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "forget-password/insert-username",
    element: <ForgetPassword_CheckUsername />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "forget-password/new-password",
    element: <ForgetPassword_InsertNewPassword />,
    isAuth: false,
    isVerify: false,
  },
];

const AuthPage = [
  {
    path: "logout",
    element: <Logout />,
    isAuth: true,
    isVerify: false,
  },
  {
    path: "profile",
    element: <Profile />,
    isAuth: true,
    isVerify: false,
  },
  {
    path: "profile/display-name",
    element: <ProfileChangeDisplayName />,
    isAuth: true,
    isVerify: false,
  },
  {
    path: "profile/email",
    element: <ProfileChangeEmail />,
    isAuth: true,
    isVerify: false,
  },
  {
    path: "profile/username",
    element: <ProfileChangeUsername />,
    isAuth: true,
    isVerify: false,
  },
  {
    path: "link-collection",
    element: <LinkCollection />,
    isAuth: true,
    isVerify: false,
  },
];

const AuthAndVerifyPage = [
  {
    path: "profile/password",
    element: <ProfileChangePassword />,
    isAuth: true,
    isVerify: true,
  },
  {
    path: "create",
    element: <CreateAndUpdate />,
    isAuth: true,
    isVerify: true,
  },
  {
    path: "update",
    element: <CreateAndUpdate />,
    isAuth: true,
    isVerify: true,
  },
  {
    path: "link-collection/:link",
    element: <UrlCollection />,
    isAuth: true,
    isVerify: true,
  },
];

const NotifPage = [
  {
    path: "notif/register",
    element: <AfterRegister />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "notif/forget-password",
    element: <ForgetPassword />,
    isAuth: false,
    isVerify: false,
  },
  {
    path: "notif/req-activation",
    element: <RequestActivation />,
    isAuth: true,
    isVerify: false,
  },
  {
    path: "notif/verify-email",
    element: <VerifyEmail />,
    isAuth: true,
    isVerify: true,
  },
];

const routeCollection = [
  ...GlobalPage,
  ...AuthPage,
  ...AuthAndVerifyPage,
  ...NotifPage,
];

export default routeCollection;
