import DefaultNavbar from "./DefaultNavbar";
import React, { useState, useEffect, Fragment } from "react";
import { itemTotal, getCart } from "../marketplace/cartHelpers";
import { isAuthenticated, signout } from "../../api/apiAuth";
import Link from "next/link";
import RedirectTo from "@components/marketplace/redirect-to";
import { API } from "config";

function DefaultHeader() {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);
  const [count, setCount] = useState();

  useEffect(() => {
    setItems(getCart());
    console.log("items", items);
  }, [run]);

  const showCart = () =>
    items.map((p, i) => (
      <div key={i} className="single-cart">
        <div className="cart-img">
          <a href="/cart">
            <img src={`${API}/product/photo/${p._id}`} alt="book" />
          </a>
        </div>
        <div className="cart-info">
          <h5>
            <a href="/cart">{p.title}</a>
          </h5>
          <p>
            {p.count} x {`$${p.price}`}
          </p>
        </div>
      </div>
    ));

  const getTotal = () => {
    return items.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.price;
    }, 0);
  };
  return (
    <header>
      <div className="header-top-area" id="sticky-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="logo-area">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 d-none d-lg-block">
              <div className="menu-area">
                <DefaultNavbar orientation="desktop" />
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 com-md-6 col-6">
              <div className="header-right-area">
                <ul>
                  <li>
                    <a href="/">
                      <img src="/assets/images/flag/1.jpg" alt="flag" />{" "}
                    </a>
                    <div className="langSelecter">
                      <div className="lang-btn btn btn-sm btn-block">
                        <img src="/assets/images/flag/3.jpg" alt="flag" />{" "}
                        Turkish
                      </div>
                      <div className="lang-btn btn btn-sm btn-block">
                        <img src="/assets/images/flag/2.jpg" alt="flag" />{" "}
                        Arabic
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="/cart">
                      <i className="icon ion-bag"></i>
                    </a>
                    <span>{itemTotal()}</span>
                    <div className="mini-cart-sub">
                      <div className="cart-product">{showCart()}</div>
                      <div className="cart-totals">
                        <h5>
                          Total <span>{`$${getTotal()}`}</span>
                        </h5>
                      </div>
                      <div className="cart-bottom">
                        <a href="/checkout">Check out</a>
                      </div>
                    </div>
                  </li>

                  <li>
                    <a href="/" id="show-cart">
                      <i className="icon ion-drag"></i>
                    </a>
                    <div className="shapping-area" id="hide-cart">
                      <div className="single-shapping mb-20">
                        <span>My Account</span>
                        <ul>
                          {isAuthenticated() &&
                            isAuthenticated().user.role === 0 && (
                              <Fragment>
                                <li>
                                  <Link href="/dashboard/user">Profile</Link>
                                </li>
                                <li>
                                  <a href="/">
                                    <i
                                      className="fa fa-sign-out"
                                      onClick={() => signout(() => {})}
                                    >
                                      {" "}
                                      Logout
                                    </i>
                                  </a>
                                </li>
                              </Fragment>
                            )}

                          {isAuthenticated() &&
                            isAuthenticated().user.role === 1 && (
                              <Fragment>
                                <li>
                                  <Link href="/dashboard/admin">Profile</Link>
                                </li>
                                <li>
                                  <a href="/auth/login">
                                    <i
                                      className="fa fa-sign-out"
                                      onClick={() =>
                                        signout(() => {
                                          RedirectTo("auth/login");
                                        })
                                      }
                                    >
                                      {" "}
                                      Logout
                                    </i>
                                  </a>
                                </li>
                              </Fragment>
                            )}
                          {!isAuthenticated() && (
                            <Fragment>
                              <li>
                                <a href="/auth/login">
                                  <i className="fa fa-sign-in"> Login</i>
                                </a>
                              </li>
                              <li>
                                <a href="/auth/register">
                                  <i className="fa fa-sign-out"> Register</i>
                                </a>
                              </li>
                            </Fragment>
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu-area d-block d-lg-none clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mobile-menu">
                <DefaultNavbar orientation="mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DefaultHeader;
