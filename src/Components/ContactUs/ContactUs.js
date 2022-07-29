import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormControl, InputLabel, Input, TextField } from "@mui/material";
import './ContactUs.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#a16054',
  },
  palette: {
    primary: {
      main: '#1da3e4',
      darker: '#a16054',
    },
    text: {
      primary: '#414141'
    }
  }
});

export default function ContactUs() {
  const form = useRef();
  let [stateName, setStateName] = useState({ value: "" });
  let [stateEmail, setStateEmail] = useState({ value: "" });

  const handleChangeName = (event) => {
    let text = event.target.value;
    
    if (text.length <= 12){
      setStateName({ value: text });
    };
  };

  const handleChangeEmail = (event) => {
    let text = event.target.value;
    
    if (text.length <= 25){
      setStateEmail({ value: text });
    };
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vq1i8oe",
        "template_4x55yj3",
        form.current,
        "_nGa0no_HwAnOitYM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form" ref={form} onSubmit={sendEmail} >
      <ThemeProvider theme={theme}>
        <div className="form__label">
        <FormControl variant="standard" >
        <InputLabel htmlFor="component-simple" >Имя</InputLabel>
        <Input onChange={handleChangeName} value={stateName.value} className="form__input" id="component-simple" type="text" name="user_name" />
      </FormControl>
        </div>
        <div className="form__label">
        <FormControl variant="standard" className="form__label">
        <InputLabel htmlFor="component-simple" >Email</InputLabel>
        <Input onChange={handleChangeEmail} value={stateEmail.value} className="form__input"  id="component-simple" type="email" name="user_email" />
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
        />
      </FormControl>
        </div>
      
      <input type="submit" value="Отправить сообщение" className="form__btn"/>
      </ThemeProvider>
     
    </form>
  );
}
