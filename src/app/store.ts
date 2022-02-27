import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import sliderReducer from '../features/sliders/sliderSlice';
import oldestReducer from '../features/oldest/oldestSlice';


export const store = configureStore({
  reducer: {
    sliders: sliderReducer,
    oldest: oldestReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
