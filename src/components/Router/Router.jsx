import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camerafeed from '../../screens/Camerafeed/Camerafeed';
import Home from '../../screens/Home/Home';
import Statistics from '../../screens/Statistics/Statistics';
import Settings from '../../screens/Settings/Settings';
import Sidebar from '../Sidebar/Sidebar';

import styles from './styles.module.css';

export default function Router() {
    return (
        <BrowserRouter>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/diagramm" element={<Statistics />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/camera" element={<Camerafeed />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}
