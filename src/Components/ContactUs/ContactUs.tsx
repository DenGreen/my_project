import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormControl, InputLabel, Input, TextField } from "@mui/material";
import "./ContactUs.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import {
  messageSending,
  messageSendingOk,
  messageReset,
} from "../../reducers/ContactUs/ContactUsSlice";
import ContactUsBtn from "./ContactUsBtn/ContactUsBtn";

const theme = createTheme({
  palette: {
    primary: {
      main: "#006895",
    },
    text: {
      primary: "#414141",
    },
  },
});

export default function ContactUs() {
  const form = useRef<HTMLFormElement>(null);
  const [stateName, setStateName] = useState<{value: string}>({ value: "" });
  const [stateEmail, setStateEmail] = useState<{value: string}>({ value: "" });
  const [stateText, setStateText] = useState<{value: string}>({ value: "" });
  const dispatch = useDispatch();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    let elementIn = event.target as HTMLInputElement;
    let text: string = elementIn.value;

    if (text.length <= 12) {
      setStateName({ value: text });
    }
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    let elementIn = event.target as HTMLInputElement;
    let text: string = elementIn.value;

    if (text.length <= 25) {
      setStateEmail({ value: text });
    }
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let elementIn = event.target as HTMLTextAreaElement;
    let text: string = elementIn.value;
    setStateText({ value: text });
  };

  const sendEmail = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(messageSending());

    setStateName({ value: "" });
    setStateEmail({ value: "" });
    setStateText({ value: "" });

    emailjs
      .sendForm(
        "service_vq1i8oe",
        "template_4x55yj3",
        form.current!,
        "_nGa0no_HwAnOitYM"
      )
      .then(
        (result) => {
          dispatch(messageSendingOk());
          setTimeout(() => {
            dispatch(messageReset());
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail}>
      <ThemeProvider theme={theme}>
        <div className="form__label">
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Имя *</InputLabel>
            <Input
              onChange={handleChangeName}
              value={stateName.value}
              className="form__input"
              id="component-simple"
              type="text"
              name="user_name"
              required={true}
            />
          </FormControl>
        </div>
        <div className="form__label">
          <FormControl variant="standard" className="form__label">
            <InputLabel htmlFor="component-simple">Email *</InputLabel>
            <Input
              onChange={handleChangeEmail}
              value={stateEmail.value}
              className="form__input"
              id="component-simple"
              type="email"
              name="user_email"
              required={true}
            />
          </FormControl>
        </div>

        <div className="form__label">
          <FormControl variant="standard">
            <TextField
              id="standard-multiline-static"
              label="Сообщение"
              name="message"
              className="form__input"
              multiline
              rows={4}
              variant="standard"
              required={true}
              value={stateText.value}
              onChange={handleChangeText}
            />
          </FormControl>
        </div>
        <ContactUsBtn />
      </ThemeProvider>
    </form>
  );
}
