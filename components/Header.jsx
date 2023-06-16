import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image'

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, height: 100, }}>
            <AppBar position="relative" color='primary' sx={{ height: 100, display: "flex", justifyContent: "center" }} >
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ width: '320px',height:'80px', position: 'relative',marginRight:"5%",}}>
                        <Image src="/images/logo.png" alt="Logo" fill />
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}