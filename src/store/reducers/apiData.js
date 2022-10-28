import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'apiData',
    initialState: {
        roomCo2: 48,
        roomO2: 34,
        roomTemp: 16,
        roomHumidity: 40,
    },
    reducers: {
        setRoomCo2: (state, action) => {
            state.roomCo2 = action.payload.roomCO2;
        },
        setRoomO2: (state, action) => {
            state.roomO2 = action.payload.roomO2;
        },
        setRoomTemp: (state, action) => {
            state.roomTemp = action.payload.roomTemp;
        },
        setRoomHumidity: (state, action) => {
            state.roomHumidity = action.payload.roomHumidity;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setRoomCo2, setRoomO2, setRoomTemp, setRoomHumidity,
} = counterSlice.actions;

export default counterSlice.reducer;
