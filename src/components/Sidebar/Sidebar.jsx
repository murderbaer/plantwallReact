import React from 'react';

import SidebarButton from '../SidebarButton/SidebarButton';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';import TimelineIcon from '@mui/icons-material/Timeline';import SettingsIcon from '@mui/icons-material/Settings';
import styles from './styles.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarButton title="Home" Icon={DashboardIcon} path="/" />
            <SidebarButton title="camera" Icon={CameraAltIcon} path="/camera" />
            <SidebarButton title="Diagramm" Icon={TimelineIcon} path="/diagramm" />
            <SidebarButton title="Settings" Icon={SettingsIcon} path="/settings" />
        </div>
    );
}
