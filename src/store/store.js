import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './reducers/settings';
import apiDataReducer from './reducers/apiData';

export default configureStore({
    reducer: {
        settings: settingsReducer,
        apiData: apiDataReducer,
    },
});
