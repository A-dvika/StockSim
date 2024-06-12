import React from 'react';
import {useEffect, useState} from "react";
import style from './Chart.module.css';
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend,
);

const Chart = ({price}) => {

    const options = {
        animation: {
            duration: 500,
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'cost',
                data: [],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgb(75, 192, 192)',
            }
        ]
    });

    const generateLabel = () => {

        const newLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        for (let i = 11; i < data.datasets[0].data.length + 1; i++) {
            newLabels.push(i);
        }
        return newLabels;
    };

    useEffect(() => {

        setData(prevData => {

            const newData = {...prevData};

            newData.datasets[0].data.push(price);
            newData.labels = generateLabel();

            return newData;
        });

    }, [data.datasets[0].data, price]);

    return (
        <div className={style.Chart}>
            <Line data={data} options={options}/>
        </div>
    );
};

export default Chart;