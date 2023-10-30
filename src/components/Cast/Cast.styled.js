import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column-reverse;
  border: solid 1px;
  border-color: #947150;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  width: 130px;
`;
