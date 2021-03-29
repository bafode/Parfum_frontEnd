import { GetServerSidePropsContext } from "next";
import HeadBoy from "@containers/HeadBoy";
import DefaultLayout from "@containers/layout/DefaultLayout";
import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../api/apiAuth";
import { read, update, updateUser } from "../../api/apiUser";
import RedirectTo from "@components/marketplace/redirect-to";
export default function Profile({ userId }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    success: false,
  });

  const { token } = isAuthenticated();
  const { name, email, password, error, success } = values;

  const init = (id) => {
    // console.log(userId);
    read(id, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, name: data.name, email: data.email });
      }
    });
  };

  useEffect(() => {
    init(userId);
  }, []);

  const handleChange = (name) => (e) => {
    setValues({ ...values, error: false, [name]: e.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    update(userId, token, { name, email, password }).then((data) => {
      if (data.error) {
        // console.log(data.error);
        alert(data.error);
      } else {
        updateUser(data, () => {
          setValues({
            ...values,
            name: data.name,
            email: data.email,
            success: true,
          });
        });
      }
    });
  };

  const redirectUser = (success) => {
    if (success) {
      return RedirectTo("/dashboard/user");
    }
  };

  const profileUpdate = (name, email, password) => (
    <form>
      <div className="form-group">
        <label className="text-muted">Name</label>
        <input
          type="text"
          onChange={handleChange("name")}
          className="form-control"
          value={name}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          type="email"
          onChange={handleChange("email")}
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          type="password"
          onChange={handleChange("password")}
          className="form-control"
          value={password}
        />
      </div>

      <button onClick={clickSubmit} className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  return (
    <>
      <HeadBoy title="User-Profile" />
      <DefaultLayout>
        {profileUpdate(name, email, password)}
        {redirectUser(success)}
      </DefaultLayout>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userId = context.params.id;

  return {
    props: {
      userId,
    },
  };
}
