import React from "react";

import { LogoPlus } from "../../styles/global";
import {
  Container,
  Wrapper,
  Input,
  SignButton,
  InputLabel,
  ButtonLabel,
} from "./styles";

function Home() {
  return (
    <Wrapper>
      <Container>
        <LogoPlus>DBooking</LogoPlus>

        <InputLabel>E-mail</InputLabel>
        <Input />

        <InputLabel>Senha</InputLabel>
        <Input />

        <SignButton>
          <ButtonLabel>Entrar</ButtonLabel>
        </SignButton>

        <SignOptions>Criar uma conta</SignOptions>
      </Container>
    </Wrapper>
  );
}

export default Home;
