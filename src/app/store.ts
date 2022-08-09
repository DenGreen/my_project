import { configureStore } from '@reduxjs/toolkit'
import contactUsReducer from '../reducers/ContactUs/FormForSendingMessagesSlice'

export const store = configureStore({
  reducer: {
    messageContact: contactUsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch