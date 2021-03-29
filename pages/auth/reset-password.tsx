import HeadBoy from '@containers/HeadBoy';
import AuthContainer from '@containers/auth/AuthContainer';

function ResetPassword() {
  return (
    <>
      <HeadBoy title="Reset Password" />
      <AuthContainer>
        <h4 className="mb-4">Reset Password</h4>
        <form action="#" method="post" className="w-100">
          <div className="form-group">
            <label htmlFor="passwordField">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              id="passwordField"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPasswordField">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="confirm_password"
              placeholder="Confirm Password"
              id="confirmPasswordField"
            />
          </div>
          <button className="btn btn-block btn-primary">Reset</button>
          <span className="my-4 d-flex justify-content-center">
            <a href="/auth/login">Back to Log In</a>
          </span>
        </form>
      </AuthContainer>
    </>
  );
}

export default ResetPassword;
