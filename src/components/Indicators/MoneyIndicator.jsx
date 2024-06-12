import React, {useContext} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {StatContext} from "../Sidebar/Sidebar";

const MoneyIndicator = () => {

    const {moneyInvest, balance, setMoneyInvest, progress} = useContext(StatContext);

    const incrementMoney = () => {
        if (moneyInvest > balance - 50) {
            return setMoneyInvest(balance);
        }
        if (moneyInvest >= 0 && !progress && moneyInvest < balance) {
            return setMoneyInvest(prevState => prevState + 50);
        }
    };

    const decrementMoney = () => {
        if (!progress) {
            if (moneyInvest <= 50) {
                return setMoneyInvest(0);
            }
            if (moneyInvest > 0) {
                return setMoneyInvest(prevState => prevState - 50);
            }
        }
    };

    const inputInvest = (e) => {
        if (moneyInvest < balance && !progress) {
            setMoneyInvest(Number(e.target.value));
        }
    };

    return (
        <>
            <Typography variant="h6" component="div" sx={{ color: 'Black' }}>
                Investment
            </Typography>
            <TextField
                size="small"
                type="number"
                value={moneyInvest}
                margin="normal"
                sx={{ bgcolor: 'white', borderRadius: '5px', width: '100%' }}
                onInput={inputInvest}
            />
            <Grid container justifyContent="center" gap="5px">
                <Button variant="outlined" sx={{ width: '45%' }} onClick={incrementMoney}>+</Button>
                <Button variant="outlined" sx={{ width: '45%' }} onClick={decrementMoney}>-</Button>
            </Grid>
        </>
    );
};

export default MoneyIndicator;
