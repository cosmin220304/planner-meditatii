import { Navbar } from "flowbite-react";
import LogoSmall from "@assets/LogoWhiteSmall.svg";
import white_logo from "@assets/images/white-logo.svg";

function Logo() {
  return (
    <Navbar.Brand href="/">
      <img src={white_logo} className="w-12" alt="Planner Logo" />
    </Navbar.Brand>
  );
}

export default Logo;
