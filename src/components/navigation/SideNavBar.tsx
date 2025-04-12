import { navigationData } from "../../utils/NavigationUtils";
import { ENavDataTitles } from "../../types/NavigationTypes";
import { MdDashboard } from "react-icons/md";
import LinkComponent from "./LinkComponent";
import { FaCalendar, FaUsers } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import LogoutComponent from "./LogoutComponent";

const SideNavBar = () => {
  return (
    <div className="px-4 grid gap-2 lg:gap-4">
      <LinkComponent
        toUrl={navigationData.get(ENavDataTitles.DASHBOARD_PAGE)!!.url}
        linkIcon={MdDashboard}
        linkName={navigationData.get(ENavDataTitles.DASHBOARD_PAGE)!!.linkName}
      />
      <LinkComponent
        toUrl={navigationData.get(ENavDataTitles.APPOINTMENTS_PAGE)!!.url}
        linkIcon={FaCalendar}
        linkName={
          navigationData.get(ENavDataTitles.APPOINTMENTS_PAGE)!!.linkName
        }
      />
      <LinkComponent
        toUrl={navigationData.get(ENavDataTitles.USERS_PAGE)!!.url}
        linkIcon={FaUsers}
        linkName={navigationData.get(ENavDataTitles.USERS_PAGE)!!.linkName}
      />
      
      <LinkComponent
        toUrl={navigationData.get(ENavDataTitles.PROFILE_PAGE)!!.url}
        linkIcon={IoPersonSharp}
        linkName={navigationData.get(ENavDataTitles.PROFILE_PAGE)!!.linkName}
      />

      <LogoutComponent />
    </div>
  );
};

export default SideNavBar;
