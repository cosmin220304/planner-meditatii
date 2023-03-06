import { Navbar } from "flowbite-react";
import { useContext } from "react";
import { TopnavContext, TopnavContextInterface } from "../context/TopnavContext";

// Hamburger toggle button that appears on mobile screens
function HamburgerButton() {
  const { toggle } = useContext(TopnavContext) as TopnavContextInterface;

  return (
    <div onClick={toggle}>
      <Navbar.Toggle className="text-white" />
    </div>
  );
}

export default HamburgerButton;
