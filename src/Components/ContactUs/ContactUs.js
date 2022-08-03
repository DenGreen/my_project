import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormControl, InputLabel, Input, TextField, CircularProgress } from "@mui/material";
import './ContactUs.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#a16054',
  },
  palette: {
    primary: {
      main: '#006895',
      darker: '#a16054',
    },
    text: {
      primary: '#414141'
    }
  }
});

export default function ContactUs() {
  const form = useRef();
  const [stateName, setStateName] = useState({ value: "" });
  const [stateEmail, setStateEmail] = useState({ value: "" });
  const [stateText, setStateText] = useState({ value: "" });
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState('Отправить сообщение');

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

  const handleChangeText = (event) => {
    let text = event.target.value;
    setStateText({ value: text });

  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setInputText('Сообщение отправляется');
    setStateName({ value: '' });
    setStateEmail({ value: '' });
    setStateText({value: ''});

    emailjs
      .sendForm(
        "service_vq1i8oe",
        "template_4x55yj3",
        form.current,
        "_nGa0no_HwAnOitYM"
      )
      .then(
        (result) => {
          setLoading(false);
          setInputText('Сообщение отправленно');
          setTimeout(() => {
            setInputText('Отправить сообщение');
          }, 2000);
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
        <InputLabel htmlFor="component-simple" >Имя *</InputLabel>
        <Input onChange={handleChangeName} value={stateName.value} className="form__input" id="component-simple" type="text" name="user_name" required={true} />
      </FormControl>
        </div>
        <div className="form__label">
        <FormControl variant="standard" className="form__label">
        <InputLabel htmlFor="component-simple" >Email *</InputLabel>
        <Input onChange={handleChangeEmail} value={stateEmail.value} className="form__input"  id="component-simple" type="email" name="user_email" required={true}/>
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

      <button type="submit" value={inputText} className={loading ? "form__btn form__btn_disabled" : "form__btn"} disabled={loading}>
      {inputText}
      {loading && (
          <CircularProgress
            size={40}
            sx={{
              color: "#1da3e4",
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-20px',
              marginLeft: '-20px',
            }}
          />
        )}
      </button>

      </ThemeProvider>
     
    </form>
  );
}
