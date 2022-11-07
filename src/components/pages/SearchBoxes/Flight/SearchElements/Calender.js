import React, { useState } from 'react';

// BasicDatePicker field  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

const Calender = () => {
    const [value, setValue] = useState(null);
    return (
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
            <DatePicker
                label="Select Date"
                value={ value }
                onChange={ (newValue) => {
                    setValue(newValue);
                } }
                renderInput={ (params) => <TextField { ...params } /> }
            />
        </LocalizationProvider>
    );
};

export default Calender;