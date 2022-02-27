import React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { update } from './sliderSlice';
import { updateOldest } from '../oldest/oldestSlice';
import { IndividualSlider as Slider } from './IndividualSlider'
import { Paper, ThemeProvider, createTheme } from '@mui/material';

export type SliderName = 'cheap' | 'fast' | 'good';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    paper: {
        backgroundColor: '#f0ede6',
        padding: '20px',
        marginTop: '20px',
    }
}

export function Sliders() {
  const slidersValue = useAppSelector(state => state.sliders.sliderState);
  const oldest = useAppSelector(state => state.oldest.oldestArray)
  const dispatch = useAppDispatch();

  const handleSliderUpdate = (payload: [string, boolean]) => {
    const chosenSlider = payload[0];
    //Get the oldest, or the next oldest if chosen slider is current oldest
    const effectiveOldest = oldest[0] === chosenSlider ? oldest[1] : oldest[0];
    //Check if all three values would result in being true, if so, set oldest false, and update oldest array
    if (payload[1] && Object.entries(slidersValue).filter(opt => opt[0] !== chosenSlider).every(opt => opt[1])) {
        dispatch(update({ [chosenSlider] : payload[1], [effectiveOldest] : false }))
        dispatch (updateOldest(effectiveOldest));
    }
    dispatch(update({ [chosenSlider] : payload[1] }));
    dispatch(updateOldest(effectiveOldest));
  }

  return (
      <ThemeProvider theme={sliderTheme}>
          <div style={styles.container}>
            <Paper style={styles.paper}>
                <Slider
                    label="Cheap"
                    sliderName="cheap"
                    checked={slidersValue.cheap}
                    onChange={handleSliderUpdate}
                    color="error"
                />
                <Slider
                    label="Fast"
                    sliderName="fast"
                    checked={slidersValue.fast}
                    onChange={handleSliderUpdate}
                    color="info"
                />
                <Slider
                    label="Good"
                    sliderName="good"
                    checked={slidersValue.good}
                    onChange={handleSliderUpdate}
                    color="success"
                />
            </Paper>
        </div>
    </ThemeProvider>
  );
}

//Slow the transitions
const sliderTheme = createTheme({
    transitions: {
        duration: {
            shortest: 500
        }
    }
})
