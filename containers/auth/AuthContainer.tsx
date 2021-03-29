import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

function AuthContainer({ children }) {
  return (
    <AuthContainerWrapper>
      <div className="left-area">
        <img
          src="/assets/images/login-bg.jpg"
          alt="auth-bg"
          className="w-100 h-100"
        />
      </div>
      <SimpleBar
        className="right-area"
        style={{ maxHeight: '100%', overflowY: 'auto', overflowX: 'hidden' }}
      >
        <div
          className="d-flex p-5 flex-column justify-content-center align-items-center"
          style={{ height: '100vh' }}
        >
          {children}
        </div>
      </SimpleBar>
    </AuthContainerWrapper>
  );
}

const AuthContainerWrapper = styled.section`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  display: flex;

  .left-area {
    flex: 2;

    img {
      object-fit: cover;
      object-position: center;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .right-area {
    flex: 1;

    .btn-social {
    }
  }
`;

export default AuthContainer;
