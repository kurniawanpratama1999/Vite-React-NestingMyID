// DEPENDENCIES
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// COMPONENTS
import Layouts from "./components/Layouts";

// PAGES

// STYLES
import "./assets/styles/main.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/"/> {/* ABOUT */}
        <Route path="/"/> {/* HOME */}
        <Route path="/"/> {/* REGISTER */}
        <Route path="/"/> {/* LOGIN */}
        <Route element={<ProtectedPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
