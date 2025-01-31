import "tailwindcss/tailwind.css";
// DEPENDENCIES
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// LAYOUTS
import { Layouts } from "@/Components";

// MIDLEWARE
import routeCollection from "@/Routes";
import { AuthMiddleware, VerifyMiddleware } from "@/Middlewares";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        {routeCollection.map((route, index) => {
          const { isAuth, isVerify, path } = route;
          let element = route.element;
          if (isAuth && isVerify) {
            element = (
              <AuthMiddleware>
                <VerifyMiddleware>{element}</VerifyMiddleware>
              </AuthMiddleware>
            );
          }

          if (isAuth && !isVerify) {
            element = <AuthMiddleware>{element}</AuthMiddleware>;
          }

          if (!isAuth && isVerify) {
            element = <VerifyMiddleware>{element}</VerifyMiddleware>;
          }

          return <Route key={index} path={path} element={element} />;
        })}
      </Route>
    </Routes>
  </BrowserRouter>
);
