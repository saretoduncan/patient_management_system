import logo from "../../assets/SARETO_DENTAL_LOGO.webp";
const LogoComponent = () => {
  return (
    <figure>
      <img src={logo} alt="sareto dental logo" className="w-20 lg:w-40" />
    </figure>
  );
};

export default LogoComponent;
