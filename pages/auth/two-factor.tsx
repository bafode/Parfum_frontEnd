import HeadBoy from '@containers/HeadBoy';
import AuthContainer from '@containers/auth/AuthContainer';

function TwoFactor() {
  return (
    <>
      <HeadBoy title="Two Factor" />
      <AuthContainer>
        <h4 className="mb-4">Two Factor Authentication</h4>
        <form action="#" method="post" className="w-100">
          <div className="form-group">
            <label htmlFor="codeField">Code</label>
            <input
              type="text"
              className="form-control"
              name="code"
              placeholder="Code"
              id="codeField"
            />
          </div>
          <button className="btn btn-block btn-primary">Submit Code</button>
          <button className="btn btn-block btn-secondary">Resend Code</button>
        </form>
      </AuthContainer>
    </>
  );
}

export default TwoFactor;
