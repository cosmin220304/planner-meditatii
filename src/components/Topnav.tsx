import { Avatar, Navbar } from "flowbite-react";
import LogoSmall from "../assets/LogoWhiteSmall.svg";
import StudentAvatar from "../assets/StudentAvatar.svg";
import ProfessorAvatar from "../assets/ProfessorAvatar.svg";
import { useState } from "react";
import { CATEGORIES } from "../utils/TopnavConstants";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Topnav() {
  const { search, pathname } = useLocation();
  const [toggle, setToggle] = useState(false);
  const queryParams = new URLSearchParams(search);
  const targetCategory = queryParams.get("category") || CATEGORIES[0];

  function isTargetCategory(category: string) {
    return category === targetCategory;
  }

  return (
    <div className="text-white [&>*]:bg-blue-500">
      {/* Upper part with logo and profile buttons */}
      <Navbar fluid>
        <Navbar.Brand href="/">
          <img src={LogoSmall} className="w-12" alt="Planner Logo" />
        </Navbar.Brand>

        {/* Hamburger toggle button that appears on mobile screens */}
        <div onClick={() => setToggle((prev) => !prev)}>
          <Navbar.Toggle className="text-white" />
        </div>

        <Navbar.Collapse>
          <div className="cursor-pointer">
            <Avatar img={StudentAvatar} size="sm" rounded />
            <div className="text-center text-xs font-semibold">Become Student</div>
          </div>

          <div className="cursor-pointer">
            <Avatar img={ProfessorAvatar} size="sm" rounded />
            <div className="text-center text-xs font-semibold">Become Professor</div>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* Categories links */}
      <div
        className={`brightness-90 w-full px-4 py-2 ${
          toggle ? "flex" : "hidden" // hide on mobile if toggle was not pressed
        } flex-col justify-between md:flex-row md:flex`}
      >
        {CATEGORIES.map((category) => (
          <Link
            className={`${isTargetCategory(category) ? "underline" : ""}`}
            key={category}
            to={`${pathname}?category=${category}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;
