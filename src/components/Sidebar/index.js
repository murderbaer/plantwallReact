
import SidebarButton from '../SidebarButton';


export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarButton title="Home" iconName="fa fa-home"/>
            <SidebarButton title="Diagramm" iconName="fa fa-chart-area"/>
            <SidebarButton title="Settings" iconName="fa fa-cog"/>
        </div>
    );
}