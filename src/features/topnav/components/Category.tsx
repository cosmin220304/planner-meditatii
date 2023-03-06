import { CATEGORIES } from "@utils/TopnavConstants";
import { Link, useLocation } from "react-router-dom";

interface Props {
  category: string;
}

function Category({ category }: Props) {
  const { search, pathname } = useLocation();
  const queryParams = new URLSearchParams(search);
  const targetCategory = queryParams.get("category") || CATEGORIES[0];

  let className = "";
  if (category === targetCategory) {
    className += "underline";
  }

  return (
    <Link to={`${pathname}?category=${category}`} className={className}>
      {category}
    </Link>
  );
}

export default Category;
