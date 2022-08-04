import { createSlice } from '@reduxjs/toolkit';
import {SENDING, SENDING_OK, INITIAL} from "../../actions/actionTypes"

const initialState = {
  value: INITIAL,
}

export const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    messageSending: (state) => {
        state.value = SENDING;
    },
    messageSendingOk: (state) => {
        state.value = SENDING_OK;
    },
    messageReset: (state) => {
        state.value = INITIAL;
    }
  },
})


export const {messageSending, messageSendingOk, messageReset} = contactUsSlice.actions

export default contactUsSlice.reducer