import styled from 'styled-components';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('/assets/ia-react.png');
  background-size: cover;
  background-position: center
`;

export const Card = styled.div`
  background-color: white;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 32px;
  width: 400px;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #999;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 16px
`;

export const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px #0077ff;
  }
`;

export const Button = styled.button`
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
  }
`;

export const Error = styled.span`
  color: red;
`;

export const Logo = styled.div`
  background-image: url(logo.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 32px;
  height: 32px;
  margin-bottom: 16px;
`;

export const Footer = styled.footer`
  margin-top: 32px;
  font-size: 12px;
  text-align: center;
`;

export const MailIcon = styled(HiOutlineMail)`
  width: 20px;
  height: auto;
`;

export const LockIcon = styled(HiOutlineLockClosed)`
  width: 20px;
  height: auto;
`;