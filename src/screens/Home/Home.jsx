import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import EggIcon from '@mui/icons-material/Egg';
import {
    setRoomTemp,
    // getRoomTempFromApi,
    // getRoomHumidityFromApi,
} from '../../store/reducers/apiData';
import TextCard from '../../components/Cards/TextCard/TextCard';
import styles from './styles.module.scss';

export default function Home() {
    const apiData = useSelector((state) => state.apiData);
    const dispatch = useDispatch();

    const onSliderChange = (event) => {
        const { value } = event.target;
        const payload = { value: Number(value) };
        dispatch(setRoomTemp(payload));
    };

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         dispatch(getRoomTempFromApi());
    //         dispatch(getRoomHumidityFromApi());
    //     }, 2000);

    //     return () => clearInterval(interval);
    // });

    return (
        <div className={styles.home}>
            <div className={styles.row} >
                <TextCard title="Temperature" text={apiData.roomTemp + '°C'} icon={<ThermostatIcon />} />
                <TextCard title="Humidity" text={apiData.roomHumidity + '%'} icon={<EggIcon />} />
                <TextCard title="O2" text={apiData.roomO2 + '%'}  />
                <TextCard title="CO2" text={apiData.roomCo2 + '%'} />
            </div>
            <div className={styles.row}>
                   <TextCard title="Temperature" text={apiData.roomTemp + '°C'} icon={<ThermostatIcon />} />
            </div>
            <div className={styles.row}>
                   <TextCard title="Temperature" text={apiData.roomTemp + '°C'} icon={<ThermostatIcon />} />
            </div>
            <div className={styles.row}>
                   <TextCard title="Temperature" text={apiData.roomTemp + '°C'} icon={<ThermostatIcon />} />
            </div>
            <div className={styles.row}>
                   <TextCard title="Temperature" text={apiData.roomTemp + '°C'} icon={<ThermostatIcon />} />
            </div>
            <div className={styles.row}>
                   <TextCard title="Temperature" text={apiData.roomTemp + '°C'} icon={<ThermostatIcon />} />
            </div>
            <div className={styles.row}>
                   <TextCard title="Temperature" text={apiData.roomTemp + '°C'} icon={<ThermostatIcon />} />
            </div>
        </div>
    );
}
