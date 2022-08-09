import React from "react";
import {CircularProgress} from "@mui/material";
import {SENDING, SENDING_OK} from "../../../actions/actionTypes";
import {useAppSelector} from '../../../app/hooks';
import "./ContactUsBtn.scss";

function getAppContactUsBtn(messageSending: string) {
  let className: string = '';
  let btnText: string = '';
  let messageStatusBul: boolean = false;

  switch (messageSending) {
    case SENDING:
      className = "btn-form btn-form_disabled";
      btnText = "Сообщение отправляется";
      messageStatusBul = true;
      break;
    case SENDING_OK:
      className = "btn-form btn-form_sending-ok";
      btnText = "Сообщение отправленно";
      break;
    default:
      className = "btn-form";
      btnText = "Отправить сообщение";
      messageStatusBul = false;
    break;
  }

  return {className, btnText, messageStatusBul}
}

function ContactUsBtn() {
  const messageSending: string = useAppSelector((state) => state.messageContact.value);
  let {className, btnText, messageStatusBul} = getAppContactUsBtn(messageSending);

  return (
    <button
      type="submit"
      className={className}
      disabled={messageStatusBul}
    >
      {btnText}
      {messageStatusBul && (
        <CircularProgress
          size={40}
          sx={{
            color: "#1da3e4",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-20px",
            marginLeft: "-20px",
          }}
        />
      )}
    </button>
  );
}

export default ContactUsBtn;
