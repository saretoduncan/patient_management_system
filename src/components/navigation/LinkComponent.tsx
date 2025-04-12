import { Link, useLocation } from "react-router";
import { IconType } from "react-icons/lib";
import { useDispatch } from "react-redux";
import { closeSideNav } from "../../state/navSlice";

type TLinkProps = {
  toUrl: string;
  linkName: string;
  classes?: string;
  linkIcon: IconType;
};

const LinkComponent: React.FC<TLinkProps> = ({
  toUrl,
  linkName,
  classes,
  linkIcon: LinkIcon,
}) => {
  const location = useLocation().pathname;
  const navDispatch = useDispatch();
  const handleCloseSideNav = () => {
    navDispatch(closeSideNav());
  };
  return (
    <>
      <Link
        to={toUrl}
        className={`flex space-x-4  font-bold ${
          toUrl === location ? "bg-blue-400  text-gray-200" : " text-gray-700"
        }  rounded p-2  transform  ease-in-out duration-500  ${classes}`}
        onClick={handleCloseSideNav}
      >
        <LinkIcon className="self-center text-2xl  " />
        <span>{linkName}</span>
      </Link>
    </>
  );
};

export default LinkComponent;
