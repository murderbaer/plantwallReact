import React from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import styles from './styles.modules.css';

export default function App() {
    return (
        <div className={styles.app}>
            <Sidebar />
        </div>
    );
}
