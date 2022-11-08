import React from 'react';
import Webcam from 'react-webcam';
import useWindowDimensions from '../../helpers/windowDimension';

import styles from './styles.module.scss';

function WebcamComponent() {
    const { height } = useWindowDimensions();

    return <Webcam height={height} />;
}

export default function Camerafeed() {
    return (
        <div className={styles.webcam}>
            <WebcamComponent />
        </div>
    );
}
