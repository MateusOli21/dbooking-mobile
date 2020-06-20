import React from "react";

import BookingImg from "../../../svgs/Booking";
import DeliveryImg from "../../../svgs/Delivery";

import { LogoRegular } from "../../styles/global";
import { Container, Wrapper, Title, Card, CardTitle, Img } from "./styles";

function Home() {
  return (
    <Wrapper>
      <LogoRegular>DBooking</LogoRegular>
      <Container>
        <Title>Você deseja fazer...</Title>

        <Card>
          <BookingImg />
          <CardTitle>Reserva presencial</CardTitle>
        </Card>

        <Card>
          <DeliveryImg />
          <CardTitle>Pedir delivery</CardTitle>
        </Card>
      </Container>
    </Wrapper>
  );
}

export default Home;
