import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCart, updateItem, removeItem } from "../marketplace/cartHelpers";

export default function CartWrapper() {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  const [count, setCount] = useState();

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const getTotal = () => {
    return items.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  return (
    <div className="cart">
      <div className="breadcrumbs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-content text-center">
                <h2>cart</h2>
                <ul>
                  <li>
                    <a href="/">Home /</a>
                  </li>
                  <li className="active">
                    <a href="/cart">cart</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-main-area">
        <div className="cart-main-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form action="#">
                  <div className="table-content table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Image</th>
                          <th className="product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                          <th className="product-remove">Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((product, i) => (
                          <tr>
                            <td className="product-thumbnail">
                              <a href="cart.html#">
                                <img
                                  src={`http://localhost:5000/api/product/photo/${product._id}`}
                                  alt="man"
                                />
                              </a>
                            </td>
                            <td className="product-name">
                              <a href="cart.html#">{product.name}</a>
                            </td>
                            <td className="product-price">
                              <span className="amount">{`$${product.price}`}</span>
                            </td>
                            <td className="product-quantity">
                              <input
                                type="number"
                                className="form-control"
                                style={{
                                  backgroundColor: "white",
                                }}
                                value={count}
                                onChange={handleChange(product._id)}
                              />
                            </td>
                            <td className="product-subtotal">
                              {" "}
                              ${product.price * product.count}
                            </td>
                            <td className="product-remove">
                              <i
                                className="fa fa-times"
                                onClick={() => {
                                  removeItem(product._id);
                                  setRun(!run);
                                }}
                              ></i>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-8 col-md-7 col-12">
                <div className="buttons-cart mb-30 mt-3">
                  <ul>
                    <li>
                      <a href="/cart">Update Cart</a>
                    </li>
                    <li>
                      <a href="/marketplace">Continue Shopping</a>
                    </li>
                  </ul>
                </div>
                <div className="coupon">
                  <h3>Coupon</h3>
                  <p>Enter your coupon code if you have one.</p>
                  <form action="#">
                    <input type="text" placeholder="Coupon code" />
                    <a href="cart.html#">Apply Coupon</a>
                  </form>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-5 col-12">
                <div className="cart_totals">
                  <h2>Cart Totals</h2>
                  <table>
                    <tbody>
                      <tr className="cart-subtotal">
                        <th>Subtotal</th>
                        <td>
                          <span className="amount">
                            <h2>Total: ${getTotal()}</h2>
                          </span>
                        </td>
                      </tr>
                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                          <ul id="shipping_method">
                            <li>
                              <input type="radio" />
                              <label>
                                Flat Rate:
                                <span className="amount">£7.00</span>
                              </label>
                            </li>
                            <li>
                              <input type="radio" />
                              <label> Free Shipping </label>
                            </li>
                          </ul>
                          <a href="cart.html#">Calculate Shipping</a>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Total</th>
                        <td>
                          <strong>
                            <span className="amount">${getTotal()}</span>
                          </strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="wc-proceed-to-checkout">
                    <a href="cart.html#">Proceed to Checkout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
