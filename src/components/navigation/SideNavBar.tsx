import { navigationData } from "../../utils/NavigationUtils";
import { ENavDataTitles } from "../../types/NavigationTypes";
import { MdDashboard } from "react-icons/md";
import LinkComponent from "./LinkComponent";
import { FaCalendar, FaUsers } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { RiLogoutBoxFill } from "react-icons/ri";

const SideNavBar = () => {
  const handleLogout = () => {
    console.log("logout clicked");
  };
  return (
    <div className="px-4 grid gap-2">
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

      <div
        className="flex space-x-4 font-bold p-2 text-gray-700 cursor-pointer "
        onClick={handleLogout}
      >
        <RiLogoutBoxFill className="text-2xl" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default SideNavBar;
