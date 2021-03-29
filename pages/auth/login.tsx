import HeadBoy from "@containers/HeadBoy";
import AuthContainer from "@containers/auth/AuthContainer";
import Signin from "@components/auth/login";

function Login() {
  return (
    <>
      <HeadBoy title="Log In" />
      <AuthContainer>
        <Signin />
      </AuthContainer>
    </>
  );
}

export default Login;
