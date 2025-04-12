import { useDispatch } from "react-redux";
import logo from "../../assets/SARETO_DENTAL_LOGO.webp";
import { VscThreeBars } from "react-icons/vsc";
import { switchSideNav } from "../../state/navSlice";

const TopNavBar = () => {
  const navDispatcher = useDispatch();

  const handleSideNavSwitch = () => {
    navDispatcher(switchSideNav());
  };
  return (
    <div className="w-full p-4 ">
      <div className="flex justify-between">
        <section>
          <figure>
            <img src={logo} alt="sareto dental logo" className="w-20" />
          </figure>
        </section>
        <section className="flex items-center">
          <VscThreeBars
            className=" text-3xl text-blue-400 cursor-pointer"
            onClick={handleSideNavSwitch}
          />
        </section>
      </div>
    </div>
  );
};

export default TopNavBar;
