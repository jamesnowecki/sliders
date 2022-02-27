import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Oldest {
    oldestArray: string[];
}

const initialState =  { 
    oldestArray : ['cheap', 'fast', 'good']
};

const oldestSlice = createSlice({
    name: 'oldest',
    initialState,
    reducers: {
        updateOldest(state, action: PayloadAction<string>) {
            state.oldestArray = [...state.oldestArray.filter(sliderName => sliderName !== action.payload), action.payload];
        },
    }
});

export const { updateOldest } = oldestSlice.actions;
export default oldestSlice.reducer;