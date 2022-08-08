import { configureStore} from '@reduxjs/toolkit';
import StoreReducer from './storeSlice';

export const store = configureStore({
    reducer: {
        store: StoreReducer,
    }
});