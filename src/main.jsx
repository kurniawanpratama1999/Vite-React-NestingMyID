// DEPENDENCIES
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// COMPONENTS
import Layouts from "./components/Layouts";
import ProtectedPage from "./Middleware/ProtectedPage";

// PAGES
import Home from "./pages/00-Home-all/Home";

// STYLES
import "./assets/styles/main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="" element={<Home />} /> {/* 00-HOME */}
        <Route path="about" /> {/* 01-ABOUT */}
        <Route path="register" /> {/* 02-REGISTER */}
        <Route path="login" /> {/* 03-LOGIN */}
        <Route element={<ProtectedPage />}>
          <Route path="" />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
