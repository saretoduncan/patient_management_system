import { ENavDataTitles, TNavLinkTypes } from "../types/NavigationTypes";

export const navigationData: Map<string, TNavLinkTypes> = new Map();

navigationData.set(ENavDataTitles.LOGIN_PAGE, {
  linkName: "Login",
  url: "/login",
});

