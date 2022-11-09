import React from 'react';
import PropTypes from 'prop-types';
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

export default function ChartCard({
    title, text, icon, onClick,
}) {
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                fill: true,
                borderColor: 'rgba(255, 99, 132, 0.4)',
                backgroundColor: 'pink',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                fill: true,
                borderColor: 'rgba(53, 162, 235, 0.4)',
                backgroundColor: 'pink',
            },
        ],
    };
    return (
        <div className={styles.boxWrapper} onClick={onClick}>
            <div className={styles.boxText}>
                <div className={styles.boxTitle}>
                    {icon}
                    {title}
                </div>
                <div className={styles.boxData}>{text}</div>
            </div>
            <div className={styles.chart}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
}

ChartCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    onClick: PropTypes.func,
};

ChartCard.defaultProps = {
    icon: null,
    onClick: () => {},
};
