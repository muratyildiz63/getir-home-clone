import React, { useEffect, useState } from "react";
import apiCategories from "api/categories.json";
import Item from "./Item";
import Title from "components/Title";
function Index() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategories(apiCategories);
 //   console.log(categories);
  }, []);
  return (
    <div className="bg-white mb-5 border-b border-gray-200 pb-5 pt-3 px-3" >
      <div className="container">

        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12">
          {categories &&
            categories.map((item, index) => <Item item={item} key={item.id} index={index} />)}
        </div>
      </div>
    </div>
  );
}

export default Index;
