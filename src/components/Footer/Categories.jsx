import React, { useEffect, useState } from "react";
import footerCategories from "api/footerCategories.json";
import Title from "./Title";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
export default function Categories() {
  const onlyWidth = useWindowWidth();

  const [categories, setCategories] = useState([]);
  const [isOpened, setIsOpened] = useState(true);
  useEffect(() => {
    setCategories(footerCategories);
    console.log(categories);
  }, []);
  const toggleCollapse = () => {
    if(onlyWidth<768){
      setIsOpened(!isOpened)
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {categories &&
        categories.map((CATEGORY) => (
          <div className="flex flex-col flex-1">
            <div onClick={toggleCollapse}>
              <Title>{CATEGORY.name}</Title>
            </div>
            <Collapse isOpened={isOpened}>
              <div className="">
                {CATEGORY.children &&
                  CATEGORY.children.map((child) => (
                    <div className="text-sm mb-2 md:mb-4">{child.name}</div>
                  ))}
              </div>
            </Collapse>
          </div>
        ))}
    </div>
  );
}
