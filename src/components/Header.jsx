import React from "react";
import {AppBar, Box, Toolbar, Typography, IconButton, TextField, InputAdornment, Container, Stack} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import SpendPlanCounter from "./SpendPlanCounter";

const Header = () => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="md">
                    
                    <Stack
                        direction="row"
                        justifyContent="space-between"  
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                        >
                            <Toolbar variant="dense">
                                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                                    <MenuIcon />
                                </IconButton>
                            </Toolbar>
                            <Typography variant="h6" color="inherit" component="div" sx={{ mr: 2 }}>
                                Bookkeeper
                            </Typography>
                        </Stack>

                        <SpendPlanCounter />
                    </Stack>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Header;