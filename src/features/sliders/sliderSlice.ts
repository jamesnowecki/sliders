import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SliderState {
    sliderState: {
        cheap: boolean;
        fast: boolean;
        good: boolean;
    }
};

const initialState: SliderState = {
    sliderState: {
        cheap: false,
        fast: false,
        good: false
    }
};

const sliderSlice = createSlice({
    name: 'slider',
    initialState,
    reducers: {
        update(state, action: PayloadAction<Record<string, boolean>>) {
            console.log('updateSliders called', state, action.payload)
            state.sliderState = { ...state.sliderState, ...action.payload };
        }
    }
});

export const { update } = sliderSlice.actions;
export default sliderSlice.reducer;