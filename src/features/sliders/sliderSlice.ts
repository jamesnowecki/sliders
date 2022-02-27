import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SliderState {
    cheap: boolean;
    fast: boolean;
    good: boolean;
};

const initialState: SliderState = {
    cheap: false,
    fast: false,
    good: false
};

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        update(state, action: PayloadAction<Record<string, boolean>>) {
            state = { ...state, ...action.payload };
        }
    }
});

export const { update } = sliderSlice.actions;
export default sliderSlice.reducer;