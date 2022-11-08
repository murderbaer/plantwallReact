import React from 'react';
import Router from './components/Router/Router';
import "@fontsource/roboto"; // Defaults to weight 400.

import styles from './styles.module.css';

export default function App() {
    return (
        <div>
            <div className={styles.content}>
                <Router />
            </div>
        </div>
    );
}
