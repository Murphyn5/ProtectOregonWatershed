import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    value: {
        title: "",
        days: "",
        dates: "",
        times: "",
        location: "",
        description: "",
        link: ""
    },
};

export const events = createSlice({
    name: 'events',
    initialState,
    reducers: {
        updateEvent: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    title: action.payload,
                    days: "",
                    dates: "",
                    times: "",
                    location: "",
                    description: "",
                    link: ""
                }
            }
        },
        // createEvent: (state) => {
        //     state.value += 1;
        // },
        // deleteEvent: (state) => {
        //     state.value -= 1;
        // },
        
    },
});