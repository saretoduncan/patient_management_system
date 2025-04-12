import { RiLogoutBoxFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { closeSideNav } from "../../state/navSlice";

const LogoutComponent = () => {
  const navDispatch = useDispatch();
  const handleLogout = () => {
    console.log("logout clicked");
    navDispatch(closeSideNav());
  };
  return (
    <div
      className="flex space-x-4 lg:space-x-1 font-bold p-2 text-gray-700 cursor-pointer "
      onClick={handleLogout}
    >
      <RiLogoutBoxFill className="text-2xl" />
      <span>Logout</span>
    </div>
  );
};

export default LogoutComponent;
