import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import GlobalCarousel from "@components/carousel/carousel";
import { Button, Card, CardDeck } from "react-bootstrap";

export default function CheckoutWrapper() {
  return (
    <>
      <div className="shop-main-area">
        <div className="breadcrumbs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-content text-center">
                  <h2>checkout</h2>
                  <ul>
                    <li>
                      <a href="checkout.html#">Home /</a>
                    </li>
                    <li className="active">
                      <a href="checkout.html#">checkout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-main-area">
          <div className="coupon-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="coupon-accordion">
                    <h3>
                      Returning customer?{" "}
                      <span id="showlogin">Click here to login</span>
                    </h3>
                    <div className="coupon-content" id="checkout-login">
                      <div className="coupon-info">
                        <p className="coupon-text">
                          Quisque gravida turpis sit amet nulla posuere lacinia.
                          Cras sed est sit amet ipsum luctus.
                        </p>
                        <form action="#">
                          <p className="form-row-first">
                            <label>
                              Username or email{" "}
                              <span className="required">*</span>
                            </label>
                            <input type="text" />
                          </p>
                          <p className="form-row-last">
                            <label>
                              Password <span className="required">*</span>
                            </label>
                            <input type="text" />
                          </p>
                          <p className="form-row">
                            <input type="submit" value="Login" />
                            <label>
                              <input type="checkbox" />
                              Remember me
                            </label>
                          </p>
                          <p className="lost-password">
                            <a href="checkout.html#">Lost your password?</a>
                          </p>
                        </form>
                      </div>
                    </div>
                    <h3>
                      Have a coupon?{" "}
                      <span id="showcoupon">Click here to enter your code</span>
                    </h3>
                    <div
                      className="coupon-checkout-content"
                      id="checkout_coupon"
                    >
                      <div className="coupon-info">
                        <form action="#">
                          <p className="checkout-coupon">
                            <input type="text" placeholder="Coupon code" />
                            <input type="submit" value="Apply Coupon" />
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="checkout-area">
            <div className="container">
              <form action="#">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                    <div className="checkbox-form">
                      <h3>Billing Details</h3>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="country-select">
                            <label>
                              Country <span className="required">*</span>
                            </label>
                            <select>
                              <option value="volvo">bangladesh</option>
                              <option value="saab">Algeria</option>
                              <option value="mercedes">Afghanistan</option>
                              <option value="audi">Ghana</option>
                              <option value="audi2">Albania</option>
                              <option value="audi3">Bahrain</option>
                              <option value="audi4">Colombia</option>
                              <option value="audi5">Dominican Republic</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12 ">
                          <div className="checkout-form-list">
                            <label>
                              First Name <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          <div className="checkout-form-list">
                            <label>
                              Last Name <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="checkout-form-list">
                            <label>Company Name</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="checkout-form-list">
                            <label>
                              Address <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="Street address" />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="checkout-form-list">
                            <input
                              type="text"
                              placeholder="Apartment, suite, unit etc. (optional)"
                            />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="checkout-form-list">
                            <label>
                              Town / City <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="Town / City" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          <div className="checkout-form-list">
                            <label>
                              State / County <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          <div className="checkout-form-list">
                            <label>
                              Postcode / Zip <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="Postcode / Zip" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          <div className="checkout-form-list">
                            <label>
                              Email Address <span className="required">*</span>
                            </label>
                            <input type="email" placeholder="" />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                          <div className="checkout-form-list">
                            <label>
                              Phone <span className="required">*</span>
                            </label>
                            <input type="text" placeholder="Postcode / Zip" />
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="checkout-form-list create-acc">
                            <input type="checkbox" id="cbox" />
                            <label>Create an account?</label>
                          </div>
                          <div
                            className="checkout-form-list create-account"
                            id="cbox_info"
                            style={{ display: "none" }}
                          >
                            <p>
                              Create an account by entering the information
                              below. If you are a returning customer please
                              login at the top of the page.
                            </p>
                            <label>
                              Account password{" "}
                              <span className="required">*</span>
                            </label>
                            <input type="password" placeholder="password" />
                          </div>
                        </div>
                      </div>
                      <div className="different-address">
                        <div className="ship-different-title">
                          <h3>
                            <label>Ship to a different address?</label>
                            <input type="checkbox" id="ship-box" />
                          </h3>
                        </div>
                        <div
                          className="row"
                          id="ship-box-info"
                          style={{ display: "none" }}
                        >
                          <div className="col-xl-12">
                            <div className="country-select">
                              <label>
                                Country <span className="required">*</span>
                              </label>
                              <select>
                                <option value="volvo">bangladesh</option>
                                <option value="saab">Algeria</option>
                                <option value="mercedes">Afghanistan</option>
                                <option value="audi">Ghana</option>
                                <option value="audi2">Albania</option>
                                <option value="audi3">Bahrain</option>
                                <option value="audi4">Colombia</option>
                                <option value="audi5">
                                  Dominican Republic
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="checkout-form-list">
                              <label>
                                First Name <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="checkout-form-list">
                              <label>
                                Last Name <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="checkout-form-list">
                              <label>Company Name</label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="checkout-form-list">
                              <label>
                                Address <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Street address" />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="checkout-form-list">
                              <input
                                type="text"
                                placeholder="Apartment, suite, unit etc. (optional)"
                              />
                            </div>
                          </div>
                          <div className="col-xl-12">
                            <div className="checkout-form-list">
                              <label>
                                Town / City <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Town / City" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="checkout-form-list">
                              <label>
                                State / County{" "}
                                <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="checkout-form-list">
                              <label>
                                Postcode / Zip{" "}
                                <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Postcode / Zip" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="checkout-form-list">
                              <label>
                                Email Address{" "}
                                <span className="required">*</span>
                              </label>
                              <input type="email" placeholder="" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="checkout-form-list">
                              <label>
                                Phone <span className="required">*</span>
                              </label>
                              <input type="text" placeholder="Postcode / Zip" />
                            </div>
                          </div>
                        </div>
                        <div className="order-notes">
                          <div className="checkout-form-list">
                            <label>Order Notes</label>
                            <textarea
                              placeholder="Notes about your order, e.g. special notes for delivery."
                              rows={10}
                              cols={30}
                              id="checkout-mess"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                    <div className="your-order">
                      <h3>Your order</h3>
                      <div className="your-order-table table-responsive">
                        <table>
                          <thead>
                            <tr>
                              <th className="product-name">Product</th>
                              <th className="product-total">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="cart_item">
                              <td className="product-name">
                                Vestibulum suscipit{" "}
                                <strong className="product-quantity">
                                  {" "}
                                  × 1
                                </strong>
                              </td>
                              <td className="product-total">
                                <span className="amount">£165.00</span>
                              </td>
                            </tr>
                            <tr className="cart_item">
                              <td className="product-name">
                                Vestibulum dictum magna{" "}
                                <strong className="product-quantity">
                                  {" "}
                                  × 1
                                </strong>
                              </td>
                              <td className="product-total">
                                <span className="amount">£50.00</span>
                              </td>
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr className="cart-subtotal">
                              <th>Cart Subtotal</th>
                              <td>
                                <span className="amount">£215.00</span>
                              </td>
                            </tr>
                            <tr className="shipping">
                              <th>Shipping</th>
                              <td>
                                <ul>
                                  <li>
                                    <input type="radio" />
                                    <label>
                                      Flat Rate:{" "}
                                      <span className="amount">£7.00</span>
                                    </label>
                                  </li>
                                  <li>
                                    <input type="radio" />
                                    <label>Free Shipping:</label>
                                  </li>
                                  <li></li>
                                </ul>
                              </td>
                            </tr>
                            <tr className="order-total">
                              <th>Order Total</th>
                              <td>
                                <strong>
                                  <span className="amount">£215.00</span>
                                </strong>
                              </td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                      <div className="payment-method">
                        <div className="payment-accordion">
                          <div className="collapses-group">
                            <div
                              className="panel-group"
                              id="accordion"
                              role="tablist"
                            >
                              <div className="panel panel-default">
                                <div
                                  className="panel-heading"
                                  role="tab"
                                  id="headingOne"
                                >
                                  <h4 className="panel-title">
                                    <a
                                      data-toggle="collapse"
                                      href="checkout.html#collapseOne"
                                    >
                                      Direct Bank Transfer
                                    </a>
                                  </h4>
                                </div>
                                <div
                                  id="collapseOne"
                                  data-parent="#accordion"
                                  className="panel-collapse collapse show"
                                >
                                  <div className="panel-body">
                                    <p>
                                      Make your payment directly into our bank
                                      account. Please use your Order ID as the
                                      payment reference. Your order won’t be
                                      shipped until the funds have cleared in
                                      our account.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div
                                  className="panel-heading"
                                  role="tab"
                                  id="headingTwo"
                                >
                                  <h4 className="panel-title">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="checkout.html#collapseTwo"
                                    >
                                      Cheque Payment
                                    </a>
                                  </h4>
                                </div>
                                <div
                                  id="collapseTwo"
                                  data-parent="#accordion"
                                  className="panel-collapse collapse"
                                >
                                  <div className="panel-body">
                                    <p>
                                      Please send your cheque to Store Name,
                                      Store Street, Store Town, Store State /
                                      County, Store Postcode.
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="panel panel-default">
                                <div
                                  className="panel-heading"
                                  role="tab"
                                  id="headingThree"
                                >
                                  <h4 className="panel-title">
                                    <a
                                      className="collapsed"
                                      role="button"
                                      data-toggle="collapse"
                                      href="checkout.html#collapseThree"
                                    >
                                      PayPal{" "}
                                      <img src="img/2.png" alt="payment" />
                                    </a>
                                  </h4>
                                </div>
                                <div
                                  id="collapseThree"
                                  data-parent="#accordion"
                                  className="panel-collapse collapse"
                                >
                                  <div className="panel-body">
                                    <p>
                                      Pay via PayPal; you can pay with your
                                      credit card if you don’t have a PayPal
                                      account.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="order-button-payment">
                          <input type="submit" value="Place order" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
