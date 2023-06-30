import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #3e36c7;
  }
`;
