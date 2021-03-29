import React, { useState } from "react";

import { isAuthenticated } from "../../api/apiAuth";
import Link from "next/link";
import { createType } from "../../api/apiAdmin";

const AddType = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  const handleChange = (e) => {
    setError(false);
    setName(e.target.value);
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    // make request to api to create category
    createType(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError(false);
        setSuccess(true);
      }
    });
  };

  const newTypeFom = () => (
    <form onSubmit={clickSubmit}>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          className="form-control"
          onChange={handleChange}
          value={name}
          autoFocus
          required
        />
      </div>
      <button className="btn btn-outline-primary">Create Type</button>
    </form>
  );

  const showSuccess = () => {
    if (success) {
      return <h3 className="text-success">{name} is created</h3>;
    }
  };

  const showError = () => {
    if (error) {
      return <h3 className="text-danger">Type should be unique</h3>;
    }
  };

  const goBack = () => (
    <div className="mt-5">
      <Link href="/dashboard/admin">Back to Dashboard</Link>
    </div>
  );

  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          {showSuccess()}
          {showError()}
          {newTypeFom()}
          {goBack()}
        </div>
      </div>
    </>
  );
};

export default AddType;
