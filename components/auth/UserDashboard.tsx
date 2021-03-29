import React, { useState, useEffect } from "react";

import { isAuthenticated } from "../../api/apiAuth";
import Link from "next/link";
import { getPurchaseHistory } from "../../api/apiUser";
import moment from "moment";
import RedirectTo from "@components/marketplace/redirect-to";

const UserDashboard = () => {
  const [history, setHistory] = useState([]);

  const user = isAuthenticated().user;
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log("history", data);
        setHistory(data);
      }
    });
  };
  const { _id, name, role, email } = user;

  useEffect(() => {
    init(user._id, token);
  }, []);

  const userLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">User Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link href="/cart">My Cart</Link>
          </li>
          <li className="list-group-item">
            <Link href={`/profile/${_id}`}>Update Profile</Link>
          </li>
        </ul>
      </div>
    );
  };

  const userInfo = () => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">
            {role === 1 ? "Admin" : "Registered User"}
          </li>
        </ul>
      </div>
    );
  };

  const detailClickHandler = () => {
    RedirectTo("/user/purchase_history_view/");
  };
  const purchaseHistory = (history) => {
    return (
      <div className="card mb-5">
        <h3 className="card-header">Purchase history</h3>
        <ul className="list-group">
          <li className="list-group-item">
            {history.map((h, i) => {
              return (
                <div>
                  <hr />
                  <div className="row">
                    <div className="col-9">
                      {h.products.length > 0
                        ? h.products.map((p, i) => {
                            return (
                              <div key={i}>
                                <h6>Product name: {p.name}</h6>
                                <h6>Product price: ${p.price}</h6>
                                <h6>
                                  Purchased date:{" "}
                                  {moment(p.createdAt).fromNow()}
                                </h6>
                              </div>
                            );
                          })
                        : null}
                    </div>
                    <div className="col-3">
                      <button
                        type="button"
                        onClick={() => {
                          RedirectTo(`user/purchase_history_view/${h._id}`);
                        }}
                        className="btn btn-primary"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-3">{userLinks()}</div>
        <div className="col-9">
          {userInfo()}
          {purchaseHistory(history)}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
