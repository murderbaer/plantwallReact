import React from 'react';
import classNames from 'classnames';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import styles from './styles.module.scss';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: false,
        },
    },
    scales: {
        x: {
            display: false,
            grid: {
                display: false,
            },
        },
        y: {
            display: false,
            grid: {
                display: false,
            },
        },
    },
    elements: {
        point: {
            radius: 0,
        },
        line: {
            tension: 0.4,
        },
    },
};

const labels = Array.from({ length: 10 }, (_, i) => i + 1);

export default function ChartCard() {
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                fill: true,
                borderColor: 'rgba(255, 99, 132, 0.3)',
                backgroundColor: 'pink',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                fill: true,
                borderColor: 'rgba(53, 162, 235, 0.3)',
                backgroundColor: 'pink',
            },
        ],
    };
    return (
        <div className={classNames(styles.boxWrapper)}>
            <div className={classNames(styles.boxTitle)}>Chart</div>
            <div className={styles.chart}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}
