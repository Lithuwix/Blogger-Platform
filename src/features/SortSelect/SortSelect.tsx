import * as React from 'react';

import {styled} from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        color: 'rgba(0, 0, 0, 0.52)',
        height: '30px',
        backgroundColor: '#F7F4F5',
        borderRadius: 4,
        position: 'relative',
        border: '1px solid rgba(173, 173, 173, 0.74)',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            color: 'rgba(0, 0, 0, 0.72)',
            backgroundColor: 'rgba(255,255,255,0.94)',
            border: '1px solid rgba(0, 0, 0, 0.72)',
        },
    },
}));

export function SortSelect() {

    const [sort, setSort] = React.useState('');

    const handleChange = (event: { target: { value: string } }) => {
        setSort(event.target.value);
    };

    return (
            <FormControl sx={{ m: 1, mr: 5, width: 300 }} variant="standard">
                <NativeSelect
                    id="demo-customized-select-native"
                    value={sort}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option value="">New blogs first</option>
                    <option value={20}>Old blogs first</option>
                    <option value={30}>From A to Z</option>
                    <option value={40}>From Z to A</option>
                </NativeSelect>
            </FormControl>
    );
}

