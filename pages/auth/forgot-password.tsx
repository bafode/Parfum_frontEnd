import HeadBoy from '@containers/HeadBoy';
import AuthContainer from '@containers/auth/AuthContainer';

function ForgotPassword() {
  return (
    <>
      <HeadBoy title="Forgot Password" />
      <AuthContainer>
        <h4 className="mb-4">Forgot Password</h4>
        <p className="text-center">
          Please input your e-mail address to receive the link to reset your
          password
        </p>
        <form action="#" method="post" className="w-100">
          <div className="form-group">
            <label htmlFor="emailField">E-Mail Address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="E-Mail Address"
              id="emailField"
            />
          </div>
          <button className="btn btn-block btn-primary">Send</button>
          <span className="my-4 d-flex justify-content-center">
            <a href="/auth/login">Back to Log In</a>
          </span>
        </form>
      </AuthContainer>
    </>
  );
}

export default ForgotPassword;
