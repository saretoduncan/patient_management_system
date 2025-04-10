import { Route, Routes } from "react-router";
import Login from "../pages/auth/Login";
import { navigationData } from "../utils/NavigationUtils";
import { ENavDataTitles } from "../types/NavigationTypes";

const MainRoutes = () => {
    
  return (
    <>
      <Routes>
        <Route
          path={navigationData.get(ENavDataTitles.LOGIN_PAGE)?.url}
          element={<Login />}
        />
      </Routes>
      
    </>
  );
};

export default MainRoutes;
