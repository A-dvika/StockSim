import './App.css';
import { Box } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Chart from './components/Charts/Chart';
import GameDescription from './components/GameDescription';
import { useEffect, useState } from 'react';

function App() {
    const [price, setPrice] = useState(Math.floor(Math.random() * 30) + 1);
    const [balance, setBalance] = useState(450);
    const [showDescription, setShowDescription] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrice(Math.floor(Math.random() * 45) + 1);
        }, 2500);

        return () => clearInterval(interval);
    }, [price]);

    const handleCloseDescription = () => {
        setShowDescription(false);
    };

    return (
        <Box className="container">
            <Navbar balance={balance} />
            {showDescription ? (
                <GameDescription open={showDescription} handleClose={handleCloseDescription} />
            ) : (
                <>
                    <Sidebar price={price} balance={balance} setBalance={setBalance} />
                    <Chart price={price} />
                </>
            )}
        </Box>
    );
}

export default App;
