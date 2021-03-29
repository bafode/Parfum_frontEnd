import { useAuthForm } from '@hooks/auth/authForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ErrorDisplay from '@components/layout/ErrorDisplay';

function AuthForm({ page, pageTitle }) {
  // const apolloQuery = useQuery()
  const [viewPassword, setViewPassword] = useState(false);
  const { handleChange, handleSubmit, values } = useAuthForm(page);

  return (
    <>
      <h4 className="mb-4">{pageTitle}</h4>
      <form action="#" method="post" className="w-100" onSubmit={handleSubmit}>
        <ErrorDisplay />
        {page === 'register' && (
          <div className="form-group">
            <label htmlFor="nameField">Name</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="name"
                id="nameField"
                placeholder="Name"
                onChange={handleChange}
                value={values.name}
              />
              <input
                type="text"
                className="form-control"
                name="surname"
                id="surnameField"
                placeholder="Surname"
                onChange={handleChange}
                value={values.surname}
              />
            </div>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="emailField">E-Mail</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="emailField"
            placeholder="E-Mail"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <div className="form-group" style={{ position: 'relative' }}>
          <label htmlFor="passwordField">Password</label>
          <div className="input-group">
            <input
              type={viewPassword ? 'text' : 'password'}
              className="form-control"
              name="password"
              id="passwordField"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
            <div className="input-group-append">
              <span
                className="d-flex align-items-center h-100"
                style={{
                  position: 'absolute',
                  right: '8px',
                  cursor: 'pointer',
                  zIndex: 50,
                }}
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? (
                  <FontAwesomeIcon icon="eye-slash" className="text-dark" />
                ) : (
                  <FontAwesomeIcon icon="eye" className="text-dark" />
                )}
              </span>
            </div>
          </div>
          {page === 'login' && (
            <small className="d-flex justify-content-end my-2">
              <a href="/auth/forgot-password">Forgot your password?</a>
            </small>
          )}
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          {page === 'login' ? 'Log In' : 'Sign Up'}
        </button>
        <span className="d-flex align-items-center my-4">
          <span className="border border-secondary d-block w-100"></span>
          <span className="mx-2">OR</span>
          <span className="border border-secondary d-block w-100"></span>
        </span>
        <button className="btn d-flex justify-content-between align-items-center border border-secondary btn-social btn-block">
          {page === 'login' ? 'Log in' : 'Sign up'} with Google
          <img
            src="/assets/icons/search.svg"
            alt="google-icon"
            width="18"
            height="18"
          />
        </button>
        <button className="btn d-flex justify-content-between align-items-center border border-secondary btn-social btn-block">
          {page === 'login' ? 'Log in' : 'Sign up'} with Facebook
          <img
            src="/assets/icons/facebook-blue.svg"
            alt="facebook-icon"
            width="18"
            height="18"
          />
        </button>
        <button className="btn d-flex justify-content-between align-items-center border border-secondary btn-social btn-block">
          {page === 'login' ? 'Log in' : 'Sign up'} with Twitter
          <img
            src="/assets/icons/twitter.svg"
            alt="twitter-icon"
            width="18"
            height="18"
          />
        </button>
        <span className="my-4 d-flex justify-content-center">
          {page === 'login' ? (
            <span>
              Not a member? <a href="/auth/register">Sign Up</a>
            </span>
          ) : (
            <span>
              Already a member? <a href="/auth/login">Log In</a>
            </span>
          )}
        </span>
      </form>
    </>
  );
}

export default AuthForm;
