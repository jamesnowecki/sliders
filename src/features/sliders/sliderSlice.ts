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
        updated(state, payload: Record<string, boolean>) {

        }
    }
});

export const { updated } = sliderSlice.actions;
export default sliderSlice.reducer;