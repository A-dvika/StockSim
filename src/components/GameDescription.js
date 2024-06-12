import React from 'react';
import { Modal, Box, Typography, Button, styled } from '@mui/material';
import style from './GameDescription.module.css';

const StyledModal = styled(Modal)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledBox = styled(Box)`
    width: 400px;
    background-color: white;
    border: 2px solid #000;
    border-radius: 8px;
    padding: 20px;
    outline: none;
`;

const GameDescription = ({ open, handleClose }) => {
    return (
        <StyledModal
            open={open}
            onClose={handleClose}
            aria-labelledby="game-description-title"
            aria-describedby="game-description"
        >
            <StyledBox>
                <Typography variant="h6" component="h2" gutterBottom>
                    Welcome to StockSim!
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Embark on an exciting financial adventure where you'll navigate the ups and downs of the stock market.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Your goal? Accumulate wealth by making savvy investment decisions and mastering the art of prediction.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    How to Play:
                    <ul>
                        <li>Set your investment amount using the "+" and "-" buttons or by typing a value.</li>
                        <li>Choose the duration of your investment.</li>
                        <li>Predict whether the price will rise "Up" or fall "Down".</li>
                        <li>If your prediction is correct, watch your balance soar! If not, learn from your mistakes and try again.</li>
                    </ul>
                </Typography>
                <Button variant="contained" onClick={handleClose} sx={{ mt: 2 }}>
                    Got it!
                </Button>
            </StyledBox>
        </StyledModal>
    );
};

export default GameDescription;
