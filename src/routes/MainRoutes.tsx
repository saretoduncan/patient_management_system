import { Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import { navigationData } from "../utils/NavigationUtils";
import { ENavDataTitles } from "../types/NavigationTypes";
import Dashboard from "../pages/dasboard";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path={navigationData.get(ENavDataTitles.LOGIN_PAGE)?.url}
          element={<Login />}
        />
        <Route
          path={navigationData.get(ENavDataTitles.DASHBOARD_PAGE)?.url}
          element={<Dashboard />}
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
