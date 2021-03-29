import React, { useState, useEffect } from "react";
import { read, listRelated } from "../../api/apiCore";
import { withRouter, RouteComponentProps } from "react-router";
import Card from "../marketplace/Card";

export default function ProductDetail(props) {
  const query = props.location.search;
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = this.props.match.params.id;
    console.log("product id", productId);
    loadSingleProduct(productId);
  }, []);
  return (
    <>
      <div className="breadcrumbs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content text-center">
                <h2>product details</h2>
                <ul>
                  <li>
                    <a href="product-details.html#">Home /</a>
                  </li>
                  <li className="active">
                    <a href="product-details.html#">product details</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
