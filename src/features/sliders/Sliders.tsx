import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { update } from './sliderSlice';
import { updateOldest } from '../oldest/oldestSlice';

export type SliderName = 'cheap' | 'fast' | 'good';

export function Counter() {
  const slidersValue = useAppSelector(state => state.sliders);
  const oldest = useAppSelector(state => state.oldest)
  const dispatch = useAppDispatch();

  const handleSliderUpdate = (payload: Record<SliderName, boolean>) => {
    dispatch(update(payload));
    const chosenSlider = Object.keys(payload)[0];
    //Get the oldest, or the next oldest if chosen slider is current oldest
    const effectiveOldest = oldest[0] === chosenSlider ? oldest[1] : oldest[0];
    dispatch (updateOldest(effectiveOldest));
  }

  return (
    <div>

    </div>
  );
}


