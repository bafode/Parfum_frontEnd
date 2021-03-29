import React, { useState, useEffect } from "react";
import { GetServerSidePropsContext } from "next";

import { isAuthenticated } from "@api/apiAuth";
import { getPurchaseHistory, DeleteFromHistory } from "@api/apiUser";
import DefaultLayout from "@containers/layout/DefaultLayout";
import HeadBoy from "@containers/HeadBoy";
import RedirectTo from "@components/marketplace/redirect-to";

const PurchaseHistoryView = ({ OId }) => {
  const [history, setHistory] = useState([]);

  const user = isAuthenticated().user;
  const token = isAuthenticated().token;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        var newHistory = data.filter((d) => d._id == OId);
        console.log("new history ", newHistory);
        setHistory(newHistory);
      }
    });
  };

  useEffect(() => {
    init(user._id, token);
  }, []);

  const showInput = (key, value) => (
    <div className="input-group mb-2 mr-sm-2">
      <div className="input-group-prepend">
        <div className="input-group-text">{key}</div>
      </div>
      <input type="text" value={value} className="form-control" readOnly />
    </div>
  );

  return (
    <>
      <HeadBoy title="UserDashbord" />
      <DefaultLayout>
        {history.map((h, i) => {
          const order_id = h._id;
          const transaction_id = h.transaction_id;
          const userId = user._id;

          return (
            <div>
              <hr />

              {h.products.map((p, i) => {
                return (
                  <div key={i} className="row">
                    <div className="col-9">
                      <div>
                        {showInput("Product name", p.name)}
                        {showInput("Product price", p.price)}
                        {showInput("Product total", p.count)}
                        {showInput("Product Id", p._id)}
                        ---------------------------------------------------
                      </div>
                    </div>
                    <div className="col-3">
                      <button
                        onClick={() => {
                          console.log("pid ", p._id);
                          if (
                            DeleteFromHistory(user._id, token, {
                              order_id,
                              transaction_id,
                            })
                          ) {
                            RedirectTo(
                              `/dashboard/user/cancelForm/${order_id}`
                            );
                          }
                        }}
                        type="button"
                        className="btn btn-danger"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </DefaultLayout>
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const OId = context.params.id;

  return {
    props: {
      OId,
    },
  };
}

export default PurchaseHistoryView;
