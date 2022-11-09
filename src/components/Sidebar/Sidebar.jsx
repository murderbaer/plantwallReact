import React from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsIcon from '@mui/icons-material/Settings';
import { ForestOutlined } from '@mui/icons-material';
import SidebarButton from '../SidebarButton/SidebarButton';


import styles from './styles.module.scss';

export default function Sidebar() {


    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarLogoContainer}>
                <svg width={0} height={0}>
                    <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1}>
                        <stop offset={0} stopColor="#28DBF2" />
                        <stop offset={1} stopColor="#5860E3" />
                    </linearGradient>
                </svg>
                <ForestOutlined sx={{ fill: "url(#linearColors)" }} className={styles.sidebarLogo} />
            </div>
            <div className={styles.sidebarButtons}>
            <SidebarButton title="Home" Icon={DashboardIcon} path="/" />
            <SidebarButton title="camera" Icon={CameraAltIcon} path="/camera" />
            <SidebarButton title="Diagramm" Icon={TimelineIcon} path="/diagramm" />
            <SidebarButton title="Settings" Icon={SettingsIcon} path="/settings" />
            </div>
        </div>
    );
}
