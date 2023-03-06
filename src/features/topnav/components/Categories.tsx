import { CATEGORIES } from "@utils/TopnavConstants";
import { useContext } from "react";
import { TopnavContext, TopnavContextInterface } from "../context/TopnavContext";
import Category from "./Category";

// Links to different categories that appears under the main topnav
function Categories() {
  const { isToggled } = useContext(TopnavContext) as TopnavContextInterface;

  return (
    <div
      className={`bg-blue-500 brightness-90 w-full px-4 py-2 ${
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
