import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import BurgerButtonDrawer from './burgerButtonDrawer';

export default function MainAppBar() {
    return (
        <Box sx={{ flexGrow: 1, height: "64px"}}>
            <AppBar position="static" elevation={0} sx={{borderBottom:1,borderColor:'grey.200'}} >
                <Toolbar sx={{ backgroundColor: "white" }}>
                    <BurgerButtonDrawer/>
                    <Box position="relative" width="100px" height="60px" sx={{transform:"translateY(-20%)"}} >
                        <Image src="/../public/static/images/doordash-logo.png" sx={{overflow:"hidden"}} width={157} height={85}  />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}