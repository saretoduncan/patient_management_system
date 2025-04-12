import { Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import { navigationData } from "../utils/NavigationUtils";
import { ENavDataTitles } from "../types/NavigationTypes";
import Dashboard from "../pages/dasboard";
import Appointments from "../pages/appointments";
import Users from "../pages/users";
import Profile from "../pages/profile";

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
        <Route
          path={navigationData.get(ENavDataTitles.APPOINTMENTS_PAGE)?.url}
          element={<Appointments />}
        />
        <Route
          path={navigationData.get(ENavDataTitles.USERS_PAGE)?.url}
          element={<Users />}
        />
        <Route
          path={navigationData.get(ENavDataTitles.PROFILE_PAGE)?.url}
          element={<Profile />}
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
