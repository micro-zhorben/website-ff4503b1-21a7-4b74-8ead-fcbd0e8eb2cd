import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";

const Routes = () => (
  <RouterRoutes>
    <Route path="/" element={<Home />} />
  </RouterRoutes>
);

export { Routes };
