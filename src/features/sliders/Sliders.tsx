import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { update } from './sliderSlice';
import { updateOldest } from '../oldest/oldestSlice';
import { IndividualSlider as Slider } from './IndividualSlider'
import { Paper } from '@mui/material';

export type SliderName = 'cheap' | 'fast' | 'good';

export function Sliders() {
  const slidersValue = useAppSelector(state => state.sliders);
  const oldest = useAppSelector(state => state.oldest)
  const dispatch = useAppDispatch();

  const handleSliderUpdate = (payload: [string, boolean]) => {
    const chosenSlider = payload[0];
    //Get the oldest, or the next oldest if chosen slider is current oldest
    const effectiveOldest = oldest[0] === chosenSlider ? oldest[1] : oldest[0];
    dispatch (updateOldest(effectiveOldest));
    if (payload[1]) {
        //Check if all three values would result in being true
        if (Object.entries(slidersValue).filter(opt => opt[0] !== chosenSlider).every(opt => opt[1])) {
            dispatch(update({ [chosenSlider] : payload[1], [effectiveOldest] : false }))
            dispatch (updateOldest(effectiveOldest));
        }
        return;
    }
    dispatch(update({ [chosenSlider] : payload[1] }));
    dispatch (updateOldest(effectiveOldest));
  }

  return (
    <Paper>
        <Slider
            label="Cheap"
            sliderName="cheap"
            checked={slidersValue.cheap}
            onChange={handleSliderUpdate}
        />
        <Slider
            label="Fast"
            sliderName="fast"
            checked={slidersValue.fast}
            onChange={handleSliderUpdate}
        />
        <Slider
            label="Good"
            sliderName="good"
            checked={slidersValue.good}
            onChange={handleSliderUpdate}
        />
    </Paper>
  );
}


