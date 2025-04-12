import { useDispatch } from "react-redux";

import { VscThreeBars } from "react-icons/vsc";
import { switchSideNav } from "../../state/navSlice";
import LogoComponent from "./LogoComponent";

const TopNavBar = () => {
  const navDispatcher = useDispatch();

  const handleSideNavSwitch = () => {
    navDispatcher(switchSideNav());
  };
  return (
    <div className="w-full p-4  ">
      <div className="flex justify-between">
        <section>
          <LogoComponent />
        </section>
        <section className="flex items-center ">
          <VscThreeBars
            className=" text-3xl text-blue-400 cursor-pointer lg:hidden"
            onClick={handleSideNavSwitch}
          />
        </section>
      </div>
    </div>
  );
};

export default TopNavBar;
