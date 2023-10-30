import styled from 'styled-components';

export const Form = styled.form`
  padding: 20px;
  display: flex;
  gap: 20px;
`;

export const Btn = styled.button`
  width: 10%;
  font-size: 18px;
  border-radius: 5px;
  border: solid;
  border-color: #947150;
  &:hover,
  &:focus {
    background-color: #e4cab3;
  }
`;

export const Input = styled.input`
  width: 30%;
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: solid;
  border-color: #947150;
`;
