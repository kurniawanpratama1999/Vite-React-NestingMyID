// MIDLEWARE
import { Route } from "react-router";
import AuthPage from "../Middleware/AuthPage";
import VerifyPage from "../Middleware/VerifyPage";

// PAGES
import Home from "../pages/00-Home/Home";
import Profile from "../pages/05-Profile-auth/Profile";
import ChangeName from "../pages/05.01-ChangeName-verify/ChangeName";
import CreateAndUpdate from "../pages/06-CreateAndUpdate-auth-verify/CreateAndUpdate";
import Register from "../pages/02-Register/Register";
import Login from "../pages/03-Login/Login";

const routeCollection = [
  { path: "", element: <Home />, isAuth: false, isVerify: false },
  { path: "register", element: <Register />, isAuth: false, isVerify: false },
  { path: "login", element: <Login />, isAuth: false, isVerify: false },
  { path: "profile", element: <Profile />, isAuth: true, isVerify: false },
  { path: "change-name", element: <ChangeName />, isAuth: false, isVerify: true },
  { path: "create", element: <CreateAndUpdate />, isAuth: true, isVerify: true },
  { path: "Update", element: <CreateAndUpdate />, isAuth: true, isVerify: true },
];

const CreateRoute = routeCollection.map((route, index) => {
  const { isAuth, isVerify, path } = route;
  let element = route.element;
  if (isAuth && isVerify) {
    element = (
      <AuthPage>
        <VerifyPage>{element}</VerifyPage>
      </AuthPage>
    );
  }

  if (isAuth && !isVerify) {
    element = <AuthPage>{element}</AuthPage>;
  }

  if (!isAuth && isVerify) {
    element = <VerifyPage>{element}</VerifyPage>;
  }

  return <Route key={index} path={path} element={element} />;
});

export default CreateRoute;
