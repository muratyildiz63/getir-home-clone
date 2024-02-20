import React, { useEffect, useState } from "react";
import apiProducts from "api/products.json";
import { Item } from "./Item";
import Title from "components/Title";
function Index() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(apiProducts);
    
  }, []);
  return (
    <div className="container my-6">
      <Title className={`px-2`}>Favoriler</Title>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9">
        {products &&
          products.map((item, index) => <Item item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default Index;
