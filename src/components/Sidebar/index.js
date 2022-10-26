import React from "react";

import SidebarButton from "../SidebarButton";

import styles from "./styles.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <SidebarButton
        title="Home"
        iconName="fa fa-home"
        onClick={() => alert("home")}
      />
      <SidebarButton
        title="Diagramm"
        iconName="fa fa-chart-area"
        onClick={() => alert("diagramm")}
      />

      <SidebarButton
        title="Settings"
        iconName="fa fa-cog"
        onClick={() => alert("settings")}
      />
    </div>
  );
}
