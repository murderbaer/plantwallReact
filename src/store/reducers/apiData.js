import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import endpoints from '../../api/endpoints';

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
            state.roomCo2 = action.payload.value;
        },
        setRoomO2: (state, action) => {
            state.roomO2 = action.payload.value;
        },
        setRoomTemp: (state, action) => {
            state.roomTemp = action.payload.value;
        },
        setRoomHumidity: (state, action) => {
            state.roomHumidity = action.payload.value;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setRoomCo2, setRoomO2, setRoomTemp, setRoomHumidity,
} = counterSlice.actions;

export function getRoomTempFromApi() {
    return async function fetchRoomTemperature(dispatch) {
        try {
            const response = await axios.get(endpoints.ROOM_TEMP);
            const payload = { value: Number(response.data.temperature) };
            dispatch(setRoomTemp(payload));
        } catch (error) {
            console.error(error);
        }
    };
}

export function getRoomHumidityFromApi() {
    return async function fetchRoomHumidity(dispatch) {
        try {
            const response = await axios.get(endpoints.ROOM_HUMIDITY);
            const payload = { value: Number(response.data.humidity) };
            dispatch(setRoomTemp(payload));
        } catch (error) {
            console.error(error);
        }
    };
}
export default counterSlice.reducer;
