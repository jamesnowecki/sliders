import { createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState =  ['cheap', 'fast', 'good'];

const oldestSlice = createSlice({
    name: 'oldest',
    initialState,
    reducers: {
        updateOldest(state, action: PayloadAction<string>) {
            state = [...state.filter(sliderName => sliderName !== action.payload), action.payload];
        },
    }
});

export const { updateOldest } = oldestSlice.actions;
export default oldestSlice.reducer;