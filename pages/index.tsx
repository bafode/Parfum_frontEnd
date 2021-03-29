import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import GlobalCarousel from "@components/carousel/carousel";
import React, { useState, useEffect } from "react";
import { getProducts } from "../api/apiCore";
import Card from "@components/marketplace/Card";
import Search from "@components/marketplace/Search";

export default function Home() {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      console.log(data);
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <>
      <HeadBoy title="Home" />
      <DefaultLayout>
        <GlobalCarousel />
        <Search />
        <h2 className="mb-4">New Arrivals</h2>
        <div className="row">
          {productsByArrival.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>

        <h2 className="mb-4">Best Sellers</h2>
        <div className="row">
          {productsBySell.map((product, i) => (
            <div key={i} className="col-4 mb-3">
              <Card product={product} />
            </div>
          ))}
        </div>
      </DefaultLayout>
    </>
  );
}

// Home.getInitialProps = async () => {
//   const resposnse1 = await fetch(`${API}/products?sort=-sold&limit=6`);
//   const newRes1 = await resposnse1.json();
//   // console.log("new res", newRes1);

//   const resposnse2 = await fetch(`${API}/products?sort=-createdAt&limit=6`);
//   const newRes2 = await resposnse2.json();
//   //console.log("new res", newRes2);

//   return { newRes1: newRes1, newRes2: newRes2 };
// };
