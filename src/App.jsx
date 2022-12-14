import React from 'react';
import Router from './components/Router/Router';

import styles from './styles.module.scss';

export default function App() {
    return (
        <div>
            <div className={styles.content}>
                <Router />
            </div>
        </div>
    );
}
