import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import React from 'react';
import {createContext} from 'react';

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });

export const LightDark = () => {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return(
    <>
    <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
    </>
    )
}