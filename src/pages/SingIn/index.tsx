import React from 'react';

import LogoImg from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={LogoImg} alt="GoBarber" />

      <form action="">
        <h1>Faça seu logon</h1>
        <input placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="">Criar conta</a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;