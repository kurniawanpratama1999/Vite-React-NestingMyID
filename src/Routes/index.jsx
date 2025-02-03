import {
  Logout,
  LinkCollection,
  Profile,
  ProfileChangeDisplayName,
  ProfileChangeUsername,
  CE_InsertNewEmail,
  CE_InsertPassword,
  RequestVerifyEmail,
  VerifyLink,
} from "@/Pages/Auth";

import {
  UrlCollection,
  CreateAndUpdate,
  CP_InsertPassword,
  CP_InsertNewPassword,
} from "@/Pages/Auth_and_Verify";

import {
  Home,
  About,
  Register,
  Login,
  ForgetPassword_InsertEmail,
  ForgetPassword_InsertNewPassword,
} from "@/Pages/Global";

import {
  AfterRegister,
  ForgetPassword,
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
    path: "forget-password/new-password/:email/:username/:otpCode",
    element: <ForgetPassword_InsertNewPassword />,
    isAuth: false,
    isVerify: false,
  },
];

const AuthPage = [
  {
    path: "logout",
    element: <Logout />,
    isAuth: false,
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
    element: <CE_InsertPassword />,
    isAuth: true,
    isVerify: false,
  },
  {
    path: "profile/email/:email/:username/:otpCode?",
    element: <CE_InsertNewEmail />,
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
    path: "profile/verify-email",
    element: <RequestVerifyEmail />,
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
    element: <CP_InsertPassword />,
    isAuth: true,
    isVerify: true,
  },
  {
    path: "profile/password/:email/:username/:otpCode",
    element: <CP_InsertNewPassword />,
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
];

const VerifyPage = [
  {
    path: "verify/register/:email/:username/:otpCode",
    element: <VerifyEmail />, // after register
    isAuth: true,
    isVerify: false,
  },
  {
    path: "verify/verify-email/:email/:username/:otpCode",
    element: <VerifyLink />, // after Click Request Verify Email
    isAuth: true,
    isVerify: false,
  },
];

const routeCollection = [
  ...GlobalPage,
  ...AuthPage,
  ...AuthAndVerifyPage,
  ...NotifPage,
  ...VerifyPage,
];

export default routeCollection;
