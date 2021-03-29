import HeadBoy from "@containers/HeadBoy";
import AuthContainer from "@containers/auth/AuthContainer";
import AuthForm from "@components/auth/AuthForm";
import Siginup from "@components/auth/register";

function Register() {
  return (
    <>
      <HeadBoy title="Sign Up" />
      <AuthContainer>
        <Siginup />
      </AuthContainer>
    </>
  );
}

export default Register;
