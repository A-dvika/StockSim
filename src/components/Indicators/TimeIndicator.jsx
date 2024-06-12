import React, {useContext} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {StatContext} from "../Sidebar/Sidebar";

const TimeIndicator = () => {

    const {timeInvest, setTimeInvest, progress} = useContext(StatContext);

    const incrementTime = () => {
        if (timeInvest >= 0 && !progress) {
            setTimeInvest(prevState => prevState + 1);
        }
    };

    const decrementTime = () => {
        if (timeInvest > 0 && !progress) {
            setTimeInvest(prevState => prevState - 1);
        }
    };

    const inputInvest = (e) => {
        if (!progress) {
            setTimeInvest(Number(e.target.value));
        }
    };

    return (
        <>
            <Typography variant="h6" component="div" sx={{ color: 'Time' }}>
                Time
            </Typography>
            <TextField
                size="small"
                type="number"
                value={timeInvest}
                margin="normal"
                sx={{ bgcolor: 'white', borderRadius: '5px', width: '100%' }}
                onInput={inputInvest}
            />
            <Grid container justifyContent="center" gap="5px">
                <Button variant="outlined" sx={{ width: '45%' }} onClick={incrementTime}>+</Button>
                <Button variant="outlined" sx={{ width: '45%' }} onClick={decrementTime}>-</Button>
            </Grid>
        </>
    );
};

export default TimeIndicator;
