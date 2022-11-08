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
            <div className={classNames(styles.generalInfo, styles.box)}>
                <div className={styles.element}>
                    <ThermostatIcon />
                    {' '}
                    {apiData.roomTemp}
                    °C
                </div>
                <div className={styles.element}>
                    <EggIcon />
                    {apiData.roomHumidity}
                    %
                </div>
                <div className={styles.element}>
                    CO2
                    {apiData.roomCo2}
                    %
                </div>
                <div>
                    O2
                    {apiData.roomO2}
                    %
                </div>
            </div>
            <div className={styles.row}>
                <div className={classNames(styles.left, styles.box, styles.element)}>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={apiData.roomTemp}
                        onChange={onSliderChange}
                        className={styles.slider}
                        id="myRange"
                    />
                </div>
                <div className={classNames(styles.right, styles.box, styles.element)}>
                    <div>subside 1</div>
                    <div>subside 2</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={classNames(styles.left, styles.box, styles.boxWrapper)}>
                    <div className={classNames(styles.boxTitle, styles.element)}>
                        <ThermostatIcon />
                        {' '}
                        Temperature
                    </div>
                    <div className={styles.boxContent}>
                        {apiData.roomTemp}
                        °C
                    </div>
                </div>
                <div className={classNames(styles.right, styles.box, styles.element)}>right</div>
            </div>
        </div>
    );
}
