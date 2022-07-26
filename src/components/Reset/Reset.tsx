import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { auth, sendPasswordReset } from '../../firebase'


//todo вынести в отдельный файл
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ResetContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #dcdcdc;
  padding: 30px;
  border-radius: 30px;
`;
const ResetInput = styled.input`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;
const ResetButton = styled.button`
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  color: white;
  background-color: black;
`;

export const Reset:React.FC = () => {
    return (
        <Wrapper>
            <ResetContainer>
                <ResetInput
                    type="text"
                    className="reset__textBox"
                    placeholder="E-mail Address" />
                <ResetButton>Send password reset email</ResetButton>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </ResetContainer>
        </Wrapper>
    )
}