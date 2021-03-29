import React, { useState, useEffect } from "react";
import { GetServerSidePropsContext } from "next";
import moment from "moment";

import { isAuthenticated } from "@api/apiAuth";

import {
  getPurchaseHistory,
  DeleteFromHistory,
  createCancel,
} from "@api/apiUser";
import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
export default function CancelForm({ OId }) {
  const [history, setHistory] = useState([]);
  const [success, setSuccess] = useState(false);
  const [values, setValues] = useState({
    text: "",
    product: "",
    cancelledProduct: "",
    userId: "",
    error: false,
    success: true,
    loading: false,
    redirectToProfile: false,
    formData: new FormData(),
  });

  const user = isAuthenticated().user;
  const token = isAuthenticated().token;

  const {
    text,
    error,
    loading,
    product,
    userId,
    cancelledProduct,
    formData,
    redirectToProfile,
  } = values;

  const init = (userId, token) => {
    getPurchaseHistory(userId, token).then((data) => {
      if (data.error) {
        console.log(data.error);
        setValues({ ...values, error: data.error });
      } else {
        var newHistory = data.filter((d) => d._id == OId);

        setHistory(newHistory);
        setValues({
          ...values,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    init(user._id, token);
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, userId: user._id, [name]: value });
    console.log("values", values);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, loading: true });
    setSuccess(false);
    createCancel(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          text: "",
          loading: false,
          cancelledProduct: data.product,
        });
      }
    });
  };

  const newPostForm = () => {
    return (
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {history.map((h, oIndex) => {
            return (
              <div
                className="mt-5"
                key={oIndex}
                style={{ borderBottom: "5px solid indigo" }}
              >
                <form className="mb-3" onSubmit={clickSubmit}>
                  <div className="form-group">
                    <label className="text-muted">Product</label>
                    <select
                      onChange={handleChange("product")}
                      className="form-control"
                    >
                      <option>Please select</option>
                      {h.products &&
                        h.products.map((p, i) => (
                          <option key={i} value={p._id}>
                            {p.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="form18">
                      Why do you want to cancel this product
                    </label>
                    <textarea
                      onChange={handleChange("text")}
                      id="form18"
                      className="md-textarea form-control"
                      rows={3}
                    ></textarea>
                  </div>

                  <button className="btn btn-outline-primary">Submit</button>
                </form>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: cancelledProduct ? "" : "none" }}
    >
      <h2>{`${cancelledProduct}`} is cancelled!</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-success">
        <h2>Loading...</h2>
      </div>
    );
  return (
    <>
      <HeadBoy title="UserDashbord" />
      <DefaultLayout>
        {showLoading()}
        {showSuccess()}
        {showError()}
        {newPostForm()}
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const OId = context.params.id;

  return {
    props: {
      OId,
    },
  };
}
