import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'settings',
    initialState: {
        apiUrl: 'http://localhost:3001',
    },
    reducers: {
        setApiUrl: (state, action) => {
            state.apiUrl = action.payload.apiUrl;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setApiUrl } = counterSlice.actions;

export default counterSlice.reducer;
