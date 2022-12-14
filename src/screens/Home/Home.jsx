import React from 'react';
import { useSelector } from 'react-redux';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import EggIcon from '@mui/icons-material/Egg';
import TextCard from '../../components/Cards/TextCard/TextCard';
import RowCard from '../../components/Cards/RowCard/RowCard';
import styles from './styles.module.scss';
import ChartCard from '../../components/Cards/ChartCard/ChartCard';

export default function Home() {
    const apiData = useSelector((state) => state.apiData);

    return (
        <div className={styles.home}>
            <RowCard>
                <ChartCard
                    title="Temperature"
                    text={`${apiData.roomTemp}°C`}
                    icon={<ThermostatIcon />}
                    onClick={() => console.log('test')}
                />
                <ChartCard title="Humidity" text={`${apiData.roomHumidity}%`} icon={<EggIcon />} />
                <ChartCard title="O2" text={`${apiData.roomO2}%`} />
                <ChartCard title="CO2" text={`${apiData.roomCo2}%`} />
            </RowCard>
            <RowCard>
                <TextCard
                    title="Temperature"
                    text={`${apiData.roomTemp}°C`}
                    icon={<ThermostatIcon />}
                    onClick={() => console.log('test')}
                />
                <TextCard title="Humidity" text={`${apiData.roomHumidity}%`} icon={<EggIcon />} />
                <TextCard title="O2" text={`${apiData.roomO2}%`} />
                <TextCard title="CO2" text={`${apiData.roomCo2}%`} />
            </RowCard>
            <RowCard>
                <TextCard title="O2" text={`${apiData.roomO2}%`} />
                <TextCard title="CO2" text={`${apiData.roomCo2}%`} />
                <TextCard title="CO2" text={`${apiData.roomCo2}%`} />
            </RowCard>
        </div>
    );
}
