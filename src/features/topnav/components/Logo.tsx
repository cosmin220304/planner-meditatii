import { Navbar } from "flowbite-react";
import LogoSmall from "@assets/LogoWhiteSmall.svg";

function Logo() {
  return (
    <Navbar.Brand href="/">
      <img src={LogoSmall} className="w-12" alt="Planner Logo" />
    </Navbar.Brand>
  );
}

export default Logo;
