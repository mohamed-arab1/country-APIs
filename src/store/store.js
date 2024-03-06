import { configureStore } from '@reduxjs/toolkit';
import darkModeReducer from './countrySlice';
export const store = configureStore({
    reducer: {
        darkModeReducer
    }
})