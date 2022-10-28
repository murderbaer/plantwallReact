import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Camerafeed from '../../screen/Camerafeed/Camerafeed';
import Home from '../../screen/Home/Home';
import Statistics from '../../screen/Statistics/Statistics';
import Settings from '../../screen/Settings/Settings';
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
