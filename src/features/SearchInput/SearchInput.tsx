import React from "react";

import {alpha, styled} from '@mui/material/styles';

import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    border: '1px solid rgba(173, 173, 173, 0.74)',
    borderRadius: theme.shape.borderRadius,
    '&:focus-within': {
        border: '1px solid rgba(0, 0, 0, 0.52)',
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    '&:focus-within .MuiSvgIcon-root': {
        color: 'rgba(0, 0, 0, 0.52)'
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    height: '50px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    color: 'rgba(0, 0, 0, 0.32)',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1.7, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    }
}));

export const SearchInput = () => {
    return (
        <Search sx={{ m: 1 }}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{'aria-label': 'search'}}
            />
        </Search>
    )
}

