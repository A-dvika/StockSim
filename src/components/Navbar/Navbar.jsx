import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Modal } from '@mui/material';
import GameDescription from '../GameDescription';

const Navbar = ({ balance }) => {
    const [open, setOpen] = useState(false);

    const handleOpenDescription = () => {
        setOpen(true);
    };

    const handleCloseDescription = () => {
        setOpen(false);
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                {/* Left side: Game Name */}
                <Typography variant="h6" component="div" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textShadow: '1px 1px 2px #333' }}>
                Stocksim
                </Typography>
                
                {/* Center: How to Play */}
                <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Button color="inherit" onClick={handleOpenDescription} sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textShadow: '1px 1px 2px #333' }}>
                        How to Play
                    </Button>
                </Box>

                {/* Right side: Balance */}
                <Typography variant="h6" component="div" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', textShadow: '1px 1px 2px #333' }}>
                    Balance: ${balance}
                </Typography>

                {/* Game Description Modal */}
                <GameDescription open={open} handleClose={handleCloseDescription} />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
