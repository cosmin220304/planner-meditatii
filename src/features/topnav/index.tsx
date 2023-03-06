import { Navbar } from "flowbite-react";
import Categories from "./components/Categories";
import Logo from "./components/Logo";
import HamburgerButton from "./components/HamburgerButton";
import ProfileButtons from "./components/ProfileButtons";
import { TopnavContextWrapper } from "./context/TopnavContext";

function Topnav() {
  return (
    <TopnavContextWrapper>
      <div className="text-white [&>*]:bg-blue-500">
        <Navbar>
          <Logo />
          <HamburgerButton />
          <ProfileButtons />
        </Navbar>
        <Categories />
      </div>
    </TopnavContextWrapper>
  );
}

export default Topnav;
