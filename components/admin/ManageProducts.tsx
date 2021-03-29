import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../api/apiAuth";
import Link from "next/link";
import { getProducts, deleteProduct } from "../../api/apiAdmin";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center">Total {products.length} products</h2>
          <hr />
          <ul className="list-group">
            {products.map((p, i) => (
              <li
                key={i}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <strong>{p.name}</strong>
                <Link href={`/admin/product/update/${p._id}`}>
                  <span
                    style={{ cursor: "pointer" }}
                    className="badge badge-warning badge-pill"
                  >
                    Update
                  </span>
                </Link>
                <span
                  onClick={() => destroy(p._id)}
                  style={{ cursor: "pointer" }}
                  className="badge badge-danger badge-pill"
                >
                  Delete
                </span>
              </li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </>
  );
};

export default ManageProducts;
