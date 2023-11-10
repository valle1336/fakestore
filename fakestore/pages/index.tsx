import axios from "axios";
import { NextPage } from "next";
import { useState, useEffect } from "react";

interface Props {}

const Index: NextPage<Props> = ({}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Error getting data: " + error);
      });
  }, []);

  return (
    <div>
      <h1>Fakestore</h1>
      {products.map((product, id) => {
        return (
          <div key={id} className="font-bold flex justify-center">
            <div className="bg-blue-500">
            <h1 className="text-2xl">{`${product.title}`}</h1>
            <p>{`${product.price}$`}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
