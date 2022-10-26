import React from "react";

import styles from './styles.modules.css'

export default function SidebarButton(props) {
    console.log(props);
    return (
        <button className={styles.sidebarButton}>
            <span className={styles.button_icon}>
                <i className={props.iconName} />
            </span>
        </button>
    );
}