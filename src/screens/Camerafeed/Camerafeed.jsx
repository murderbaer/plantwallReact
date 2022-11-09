import React from 'react';
import Webcam from 'react-webcam';
import useWindowDimensions from '../../helpers/windowDimension';

import styles from './styles.module.scss';

function WebcamComponent() {
    const { width, height } = useWindowDimensions();

    return <Webcam width={width * 0.8} height={height * 0.8} />;
}

export default function Camerafeed() {
    return (
        <div className={styles.webcam}>
            <WebcamComponent />
        </div>
    );
}
