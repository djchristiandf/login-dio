import styled from 'styled-components';

export const Container = styled.input`
  height: 48px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background-color: #f7f7f7;
  font-size: 16px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  }
`;