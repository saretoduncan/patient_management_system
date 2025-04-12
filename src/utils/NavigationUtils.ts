import { ENavDataTitles, TNavLinkTypes } from "../types/NavigationTypes";

export const navigationData: Map<string, TNavLinkTypes> = new Map();

navigationData.set(ENavDataTitles.LOGIN_PAGE, {
  linkName: "Login",
  url: "/login",
});
navigationData.set(ENavDataTitles.DASHBOARD_PAGE, {
  linkName: "Dashboard",
  url: "/",
});
navigationData.set(ENavDataTitles.USERS_PAGE, {
  linkName: "Users",
  url: "/users",
});
navigationData.set(ENavDataTitles.PROFILE_PAGE, {
  linkName: "Profile",
  url: "/profile",
});
navigationData.set(ENavDataTitles.APPOINTMENTS_PAGE, {
  linkName: "Appointments",
  url: "/appointments",
});
