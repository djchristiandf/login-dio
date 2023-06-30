import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Card, Logo, Title, Form, Label, Error} from './styles';
import { IFormLogin } from './types';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const defaultValues: IFormLogin = {
  email: '',
  password: '',
};

const Login = () => {
  const [error, setError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = async (data: IFormLogin) => {
    try {
      const response = await axios.post('http://localhost:8001/login', data);
      console.log(response.data);
      setError('');
    } catch (error) {
      console.error(error);
      setError('Dados não autenticados, reveja e tente novamente.');
    }
  };

  return (
    <Container>
      <Card>
        <Logo />
        <Title>Login</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Label><HiOutlineMail /> 
          <Input className={errors.email ? 'error' : ''} {...register('email')} />
          </Label>
          {errors.email && <Error>{errors.email.message}</Error>}

          <Label> <HiOutlineLockClosed />
          <Input className={errors.password ? 'error' : ''} type="password" {...register('password')} />
          </Label>
          {errors.password && <Error>{errors.password.message}</Error>}

          {error && <Error>{error}</Error>}

          <Button type="submit">Login</Button>
        </Form>
      </Card>      
      <Footer />
    </Container>
  );
};

export default Login;