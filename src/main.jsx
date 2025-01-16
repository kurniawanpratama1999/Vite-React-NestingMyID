// DEPENDENCIES
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// LAYOUTS
import Layouts from "./components/Layouts";

// MIDLEWARE
import AuthPage from "./Middleware/AuthPage";
import VerifyPage from "./Middleware/VerifyPage";

// STYLES
import "./assets/styles/main.css";
import { routeCollection } from "./routes/PageRoutes";
import { AuthProvider } from "./contexts/Contexts";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <AuthProvider>
            <Layouts />
          </AuthProvider>
        }
      >
        {routeCollection.map((route, index) => {
          const { isAuth, isVerify, path } = route;
          let element = route.element;
          if (isAuth && isVerify) {
            element = (
              <AuthProvider>
                <AuthPage>
                  <VerifyPage>{element}</VerifyPage>
                </AuthPage>
              </AuthProvider>
            );
          }

          if (isAuth && !isVerify) {
            element = (
              <AuthProvider>
                <AuthPage>{element}</AuthPage>
              </AuthProvider>
            );
          }

          if (!isAuth && isVerify) {
            element = <VerifyPage>{element}</VerifyPage>;
          }

          return <Route key={index} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  </BrowserRouter>
);
