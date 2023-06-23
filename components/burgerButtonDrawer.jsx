import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

const BurgerButtonDrawer = () => {
    const [drawer,setDrawer] = React.useState(false);

    const toggleDrawer = (state) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        console.log(drawer);

        setDrawer(state);
    };

    const list = () => (
        <Box
            sx={{ width: 352}}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Image src="/../public/static/images/x-logo.png" width={18} height={18} ></Image>
            <List sx={{paddingBottom:"0"}}>
                {['Home', 'Pickup','Help','Sign Up or Sign In'].map((text, index) => (
                    <>
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    <Divider sx={{marginLeft:"20px"}}/>
                    </>
                ))}
            </List>
            <Divider/>
            <Box sx={{height:"6px",backgroundColor:"grey.100"}}>

            </Box>

            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ ml:4.4,mr: -.05, transform: "translateY(1%)"}}
                onClick={toggleDrawer(true)}
            >
            <Image src="/../public/static/images/burger-logo.png" width={27} height={22} ></Image>
            </IconButton>
            <Drawer
            anchor="left"
            open={drawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </>
    )
}

export default BurgerButtonDrawer;