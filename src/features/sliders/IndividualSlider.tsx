import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

interface IndividualSliderProps {
    label: string;
    sliderName: string;
    checked: boolean;
    onChange(val: [string, boolean]): void;
    color?: string;
}

export const IndividualSlider = ({
    label,
    sliderName,
    checked,
    onChange,
    color,
}: IndividualSliderProps) => {
    return (
        <div>
            <FormControlLabel
                label={label}
                control={
                    <Switch
                    checked={checked}
                    onChange={evt => onChange([sliderName, evt.target.checked])}
                />
                }
            />
        </div>
    )
}