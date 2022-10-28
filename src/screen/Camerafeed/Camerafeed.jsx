import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';

import styles from './styles.module.css';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function WebcamComponent() {
    const { height } = useWindowDimensions();

    return <Webcam height={height * 0.95} />;
}

export default function Camerafeed() {
    return (
        <div className={styles.webcam}>
            <WebcamComponent />
        </div>
    );
}
