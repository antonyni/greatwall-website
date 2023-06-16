import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { themeOptions } from '../theme';

const defaultTheme = createTheme(themeOptions);


const StickyFooter = () => {
  return (
    <ThemeProvider theme={defaultTheme}>

        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            position:'sticky',
            backgroundColor: (theme) => 
              theme.palette.mode === 'light'
                ? theme.palette.secondary
                : theme.palette.secondary,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
          </Container>
        </Box>
    </ThemeProvider>
  );
}
export default StickyFooter;