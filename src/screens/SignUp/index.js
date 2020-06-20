import React from "react";

import { LogoPlus } from "../../styles/global";
import {
  Container,
  Wrapper,
  Input,
  SignButton,
  InputLabel,
  ButtonLabel,
  SignOptions,
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

        <InputLabel>Confime a senha</InputLabel>
        <Input />

        <SignButton>
          <ButtonLabel>Criar conta</ButtonLabel>
        </SignButton>

        <SignOptions>Já possuo uma conta</SignOptions>
      </Container>
    </Wrapper>
  );
}

export default Home;
