// DEPENDENCIES
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

// LAYOUTS
import Layouts from "./components/Layouts";

// STYLES
import "./assets/styles/main.css";
import CreateRoute from "./routes/CreateRoute";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layouts />}>
        {CreateRoute}
      </Route>
    </Routes>
  </BrowserRouter>
);
