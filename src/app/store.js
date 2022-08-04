import { configureStore } from '@reduxjs/toolkit'
import contactUsReducer from '../reducers/ContactUs/ContactUsSlice'

export const store = configureStore({
  reducer: {
    messageContact: contactUsReducer,
  },
})