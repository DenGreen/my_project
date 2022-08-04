import React from "react";
import {useSelector} from "react-redux";
import {CircularProgress} from "@mui/material";
import {SENDING, SENDING_OK} from "../../../actions/actionTypes";
import "./ContactUsBtn.scss";

function getAppContactUsBtn(messageSending) {
  let className;
  let btnText;
  let messageStatusBul;

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
  const messageSending = useSelector((state) => state.messageContact.value);
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
