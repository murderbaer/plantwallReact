import SidebarButton from '../SidebarButton';

import styles from './styles.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <SidebarButton title="Home" iconName="fa fa-home"/>
            <SidebarButton title="Diagramm" iconName="fa fa-chart-area"/>
            <SidebarButton title="Settings" iconName="fa fa-cog"/>
        </div>
    );
}