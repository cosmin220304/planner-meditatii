import { Avatar, Navbar } from "flowbite-react";
import StudentAvatar from "@assets/StudentAvatar.svg";
import ProfessorAvatar from "@assets/ProfessorAvatar.svg";
import { Link } from "react-router-dom";

function ProfileButtons() {
  function getAvatarButton(img: string, text: string) {
    return (
      <Link to="/">
        <Avatar img={img} size="sm" rounded />
        <div className="text-center text-xs font-semibold">{text}</div>
      </Link>
    );
  }

  return (
    <Navbar.Collapse>
      {getAvatarButton(StudentAvatar, "Become Student")}
      {getAvatarButton(ProfessorAvatar, "Become Professor")}
    </Navbar.Collapse>
  );
}

export default ProfileButtons;
