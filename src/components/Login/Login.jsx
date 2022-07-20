import styled from "styled-components";
import { Link } from "react-router-dom";

//TODO: вынести в отдельный файл
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #dcdcdc;
  padding: 30px;
  border-radius: 10px;
`;
const LoginInput = styled.input`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;
const LoginButton = styled.button`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  color: white;
  background-color: black;
`;
const LoginGoogle = styled.button`
  background-color: #4285f4;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  color: white;
`;

export const Login = () => {
  return (
    <Wrapper>
      <LoginContainer>
        <LoginInput placeholder="E-mail address" />
        <LoginInput placeholder="Password" />
        <LoginButton>Login</LoginButton>
        <LoginGoogle>Login with Google</LoginGoogle>
        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/register">Register</Link> now.
        </div>
      </LoginContainer>
    </Wrapper>
  );
};
