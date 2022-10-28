import React from 'react';

import SidebarButton from '../SidebarButton/SidebarButton';

import styles from './styles.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarButton title="Home" iconName="fa fa-home" path="/" />
            <SidebarButton title="camera" iconName="fa fa-camera" path="/camera" />
            <SidebarButton title="Diagramm" iconName="fa fa-chart-area" path="/diagramm" />
            <SidebarButton title="Settings" iconName="fa fa-cog" path="/settings" />
        </div>
    );
}
