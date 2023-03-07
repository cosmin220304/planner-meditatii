import { Navbar } from "flowbite-react";

interface Props {
  toggle: () => void;
}

// Hamburger toggle button that appears on mobile screens
function HamburgerButton({ toggle }: Props) {
  return (
    <div onClick={toggle}>
      <Navbar.Toggle className="text-white" />
    </div>
  );
}

export default HamburgerButton;
