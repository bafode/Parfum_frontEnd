import RedirectTo from "@components/marketplace/redirect-to";
import { Button } from "react-bootstrap";

function DefaultFooter() {
  return (
    <footer>
      <div className="newslatter-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="bt-top ptb-80">
                <div className="newlatter-content text-center">
                  <h6>Special Offers For Subscribers</h6>
                  <h3>Ten Percent Member Discount</h3>
                  <p>
                    Subscribe to our newsletters now and stay up to date with
                    new collections, the latest lookbooks and exclusive offers.
                  </p>
                  <form action="#">
                    <input
                      type="text"
                      placeholder="Enter your email address here..."
                    />
                    <button
                      onClick={() => {
                        RedirectTo("/auth/register");
                      }}
                      type="submit"
                      className="btn-outline-warning btn-light"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-area ptb-40">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-2 col-12">
              <div className="footer-logo mb-3">
                <a href="/">
                  <img src="/assets/images/logo.png" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7 col-12">
              <div className="copy-right-area mb-3 text-center">
                <p>
                  Copyright © 2020 <a href="/">Karalale</a>. All Right Reserved
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <div className="footer-social-icon">
                <ul>
                  <li>
                    <a href="/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default DefaultFooter;
