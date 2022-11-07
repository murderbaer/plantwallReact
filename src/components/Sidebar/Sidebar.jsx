import React from 'react';

import SidebarButton from '../SidebarButton/SidebarButton';

import DashboardIcon from '@mui/icons-material/Dashboard';
import styles from './styles.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarButton title="Home" Icon={DashboardIcon} path="/" />
            <SidebarButton title="camera" Icon={DashboardIcon} path="/camera" />
            <SidebarButton title="Diagramm" Icon={DashboardIcon} path="/diagramm" />
            <SidebarButton title="Settings" Icon={DashboardIcon} path="/settings" />
        </div>
    );
}
