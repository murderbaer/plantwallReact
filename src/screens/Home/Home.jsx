import React from 'react';
import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setRoomTemp } from '../../store/reducers/apiData';
import styles from './styles.module.css';

export default function Home() {
    const apiData = useSelector((state) => state.apiData);
    const dispatch = useDispatch();

    const onSliderChange = (event) => {
        const { value } = event.target;
        const payload = { value: Number(value) };
        dispatch(setRoomTemp(payload));
    };

    return (
        <div className={styles.home}>
            <div className={classNames(styles.generalInfo, styles.box)}>
                <div>
                    Temperature:
                    {' '}
                    {apiData.roomTemp}
                    °C
                </div>
                <div>
                    Humidity:
                    {apiData.roomHumidity}
                    %
                </div>
                <div>
                    Co2:
                    {apiData.roomCo2}
                    %
                </div>
                <div>
                    O2:
                    {apiData.roomO2}
                    %
                </div>
            </div>
            <div className={styles.row}>
                <div className={classNames(styles.left, styles.box)}>
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
                <div className={classNames(styles.right, styles.box)}>
                    <div>subside 1</div>
                    <div>subside 2</div>
                </div>
            </div>
            <div className={styles.row}>
                <div className={classNames(styles.left, styles.box)}>
                    <div>subside 1</div>
                    <div>subside 2</div>
                    <div>subside 3</div>
                </div>
                <div className={classNames(styles.right, styles.box)}>right</div>
            </div>
        </div>
    );
}
