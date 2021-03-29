import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  getCart,
  updateItem,
  removeItem,
  emptyCart,
} from "@components/marketplace/cartHelpers";
import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import {
  getBraintreeClientToken,
  processPayment,
  createOrder,
} from "@api/apiCore";
import { isAuthenticated } from "@api/apiAuth";

// import "braintree-web"; // not using this package
import DropIn from "braintree-web-drop-in-react";

export default function Cartt() {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  const [count, setCount] = useState();
  const [data, setData] = useState({
    loading: false,
    success: false,
    clientToken: null,
    error: false,
    instance: {},
    address: "",
  });

  const userId = isAuthenticated() && isAuthenticated().user._id;
  const token = isAuthenticated() && isAuthenticated().token;

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
        setData({ ...data, error: data.error });
      } else {
        setData({ ...data, clientToken: data.clientToken });
      }
    });
  };
  useEffect(() => {
    setItems(getCart());
    getToken(userId, token);
  }, [run]);

  const handleAddress = (event) => {
    setData({ ...data, address: event.target.value });
  };

  const getTotal = () => {
    return items.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };

  const showCheckout = () => {
    return isAuthenticated() ? (
      <div>{showDropIn()}</div>
    ) : (
      <Link href="/auth/login">
        <button className="btn btn-primary">Login to checkout</button>
      </Link>
    );
  };

  let deliveryAddress = data.address;

  const buy = () => {
    setData({ ...data, loading: true });
    // send the nonce to your server
    // nonce = data.instance.requestPaymentMethod()
    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((data) => {
        console.log("request payment", data);
        nonce = data.nonce;
        // once you have nonce (card type, card number) send nonce as 'paymentMethodNonce'
        // and also total to be charged
        // console.log(
        //     "send nonce and total to process: ",
        //     nonce,
        //     getTotal(products)
        // );
        const paymentData = {
          paymentMethodNonce: nonce,
          amount: getTotal(),
        };

        processPayment(userId, token, paymentData)
          .then((response) => {
            console.log(response);
            // empty cart
            // create order

            const createOrderData = {
              products: items,
              transaction_id: response.transaction.id,
              amount: response.transaction.amount,
              address: deliveryAddress,
            };

            createOrder(userId, token, createOrderData)
              .then((response) => {
                emptyCart(() => {
                  setRun(!run); // run useEffect in parent Cart
                  console.log("payment success and empty cart");
                  setData({ ...data, loading: false, success: true });
                });
              })
              .catch((error) => {
                console.log(error);
                setData({ ...data, loading: false });
              });
          })
          .catch((error) => {
            console.log(error);
            setData({ ...data, loading: false });
          });
      })
      .catch((error) => {
        // console.log("dropin error: ", error);
        setData({ ...data, error: error.message });
      });
  };

  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: false })}>
      {data.clientToken !== null && items.length > 0 ? (
        <div>
          <div className="gorm-group mb-3">
            <label className="text-muted">Delivery address:</label>
            <textarea
              onChange={handleAddress}
              className="form-control"
              value={data.address}
              placeholder="Type your delivery address here..."
            />
          </div>

          <DropIn
            options={{
              authorization: data.clientToken,
              paypal: {
                flow: "vault",
              },
            }}
            onInstance={(instance) => (data.instance = instance)}
          />
          <button onClick={buy} className="btn btn-success btn-block">
            Pay
          </button>
        </div>
      ) : null}
    </div>
  );

  const CarthandleChange = (productId) => (event) => {
    setRun(!run); // run useEffect in parent Cart
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showItems = (items) => {
    return (
      <div>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr />
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
                                  onChange={CarthandleChange(product._id)}
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
                        <a onClick={() => {}} href="/cart">
                          Update Cart
                        </a>
                      </li>
                      <li>
                        <a href="/marketplace">Continue Shopping</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br />{" "}
      <Link href="/marketplace">Continue shopping</Link>
    </h2>
  );

  const showSuccess = (success) => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      Thanks! Your payment was successful!
    </div>
  );
  const showError = (error) => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = (loading) =>
    loading && <h2 className="text-danger">Loading...</h2>;
  return (
    <>
      <HeadBoy title="Checkout" />
      <DefaultLayout>
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
        <div className="row">
          <div className="col-6">
            {items.length > 0 ? showItems(items) : noItemsMessage()}
          </div>

          <div className="col-6">
            <h2 className="mb-4">Your cart summary</h2>
            <hr />
            <h2>Total: ${getTotal()}</h2>
            {showLoading(data.loading)}
            {/* {showSuccess(data.success)} */}
            {showError(data.error)}
            {showCheckout()}
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
