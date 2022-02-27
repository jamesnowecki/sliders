import React from 'react';
import { Switch, Typography } from '@mui/material';

interface IndividualSliderProps {
    label: string;
    sliderName: string;
    checked: boolean;
    onChange(val: [string, boolean]): void;
    color?: ColorType;
}

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center'
    },
}

type ColorType = 'success' | 'error' | 'info'

export const IndividualSlider = ({
    label,
    sliderName,
    checked,
    onChange,
    color,
}: IndividualSliderProps) => {
    return (
        <div style={styles.container}>
            <Switch
                checked={checked}
                onChange={evt => onChange([sliderName, evt.target.checked])}
                color={(color as ColorType)}
            />
            <Typography>{label}</Typography>
        </div>
    )
}