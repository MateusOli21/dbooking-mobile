import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { parseISO, format } from "date-fns";
import { pt } from "date-fns/locale";

import {
  Container,
  Wrapper,
  ScreenTitle,
  InputLabel,
  DatePicker,
  HourContainer,
  HourCard,
  HourText,
  ButtonLabel,
  PrimaryButton,
  RestaurantArea,
} from "./styles";
import { LogoRegular } from "../../styles/global";

function Booking() {
  const [date, setDate] = useState(new Date());
  const [bookingHour, setBookingHour] = useState("");
  const [displayDate, setDisplayDate] = useState("");
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const hours = [18, 19, 20, 21, 22];

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow((current) => !current);

    const formattedDate = format(selectedDate, "PPP", { locale: pt });

    setDisplayDate(formattedDate);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  function handleHourPick(hour) {
    setBookingHour(hour);
  }

  return (
    <Wrapper>
      <LogoRegular>DBooking</LogoRegular>

      <Container>
        <ScreenTitle>Fazer uma reserva</ScreenTitle>

        <InputLabel>Escolha uma data</InputLabel>
        <DatePicker
          onPress={showDatepicker}
          title="Clique para selecionar data"
        >
          <HourText>
            {displayDate ? displayDate : "Toque para escolher a data"}
          </HourText>
        </DatePicker>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            display="default"
            onChange={onChange}
            style={{ backgroundColor: "red" }}
          />
        )}

        <InputLabel>Escolha um horário</InputLabel>
        <HourContainer>
          {hours.map((hour) => (
            <HourCard
              key={hour}
              value={hour}
              onPress={() => handleHourPick(hour)}
            >
              <HourText>{hour}h</HourText>
            </HourCard>
          ))}
        </HourContainer>

        <InputLabel>Escolha uma mesa</InputLabel>
        <RestaurantArea />

        <PrimaryButton>
          <ButtonLabel>Realizar reserva</ButtonLabel>
        </PrimaryButton>
      </Container>
    </Wrapper>
  );
}

export default Booking;
