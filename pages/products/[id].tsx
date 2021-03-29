import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import { listRelated, read } from "api/apiCore";
import React, { useState, useEffect } from "react";
import Card from "@components/marketplace/Card";
export default function Product({ pId }) {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);
  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        console.log("product", data);
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            console.log("related product", data);
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    console.log("product id", pId);
    loadSingleProduct(pId);
  }, []);
  return (
    <>
      <HeadBoy title="Product-Detail" />
      <DefaultLayout>
        <div className="row">
          <div className="col-8">
            {product && product.description && (
              <Card product={product} showViewProductButton={false} />
            )}
          </div>

          <div className="col-4">
            <h4>Related products</h4>
            {relatedProduct.map((p, i) => (
              <div className="mb-3" key={i}>
                <Card product={p} />
              </div>
            ))}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const pId = context.params.id;
  const singleProduct = read(pId).then((data) => {
    console.log("data", data);
  });

  return {
    props: {
      pId,
    },
  };
}
// export async function getServerSideProps(context: GetServerSidePropsContext) {
//   const res = await listRelated(context.params.id);
//   const res1 = await read(context.params.id);
//   const products = await res.json();
//   const product = res1.json();
//   console.log("product:", product);
//   console.log("related product:", products);

//   return {
//     props: {
//       products,
//       product,
//     },
//   };
// }
