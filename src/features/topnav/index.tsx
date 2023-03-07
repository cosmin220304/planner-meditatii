import { Navbar } from "flowbite-react";
import Categories from "./components/Categories";
import Logo from "./components/Logo";
import HamburgerButton from "./components/HamburgerButton";
import ProfileButtons from "./components/ProfileButtons";
import { useState } from "react";

function Topnav() {
  const [isToggled, setIsToggle] = useState(false);

  function toggle() {
    setIsToggle((prev) => !prev);
  }

  return (
    <div className="text-white [&>*]:bg-blue-500">
      <Navbar>
        <Logo />
        <HamburgerButton toggle={toggle} />
        <ProfileButtons />
      </Navbar>
      <Categories isToggled={isToggled} />
    </div>
  );
}

export default Topnav;
