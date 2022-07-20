import styled from "styled-components";
import { Link } from "react-router-dom";

//TODO: вынести в отдельный файл
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #dcdcdc;
  padding: 30px;
  border-radius: 10px;
`;
const RegisterInput = styled.input`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;
const RegisterButton = styled.button`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  color: white;
  background-color: black;
`;
const RegisterGoogle = styled.button`
  background-color: #4285f4;
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  color: white;
`;

export const Register = () => {
    return (
        <Wrapper>
            <RegisterContainer>
                <RegisterInput placeholder="Full Name" />
                <RegisterInput placeholder="E-mail address" />
                <RegisterInput placeholder="Password" />
                <RegisterButton>Register</RegisterButton>
                <RegisterGoogle>Register with Google</RegisterGoogle>
                <div>
                    Already have an account? <Link to="/">Login</Link> now.
                </div>
            </RegisterContainer>
        </Wrapper>
    );
};
