import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import {SENDING, SENDING_OK, INITIAL} from "../../actions/actionTypes";

interface ContacState {
  value: string
}

const initialState: ContacState = {
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


export const {messageSending, messageSendingOk, messageReset} = contactUsSlice.actions;
export const selectCount = (state: RootState) => state.messageContact.value;

export default contactUsSlice.reducer;