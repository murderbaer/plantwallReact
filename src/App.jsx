import React from 'react';
import Router from './components/Router/Router';
import Sidebar from './components/Sidebar/Sidebar';

import styles from './styles.module.css';

export default function App() {
    return (
        <div>
            <Router />
            <div className={styles.content}>
                <Router />
            </div>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
        </div>
    );
}
