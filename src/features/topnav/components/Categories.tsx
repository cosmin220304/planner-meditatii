import { CATEGORIES } from "@utils/Constants";
import Category from "./Category";

interface Props {
  isToggled: boolean;
}

// Links to different categories that appears under the main topnav
function Categories({ isToggled }: Props) {
  return (
    <div
      className={`brightness-90 w-full px-4 py-2 ${
        isToggled ? "flex" : "hidden" // hide on mobile if toggle was not pressed
      } flex-col justify-around md:flex-row md:flex`}
    >
      {CATEGORIES.map((category, index) => (
        <Category category={category} key={index} />
      ))}
    </div>
  );
}

export default Categories;
