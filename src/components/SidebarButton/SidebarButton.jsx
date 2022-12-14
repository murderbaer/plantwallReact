import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.modules.scss';

function SidebarButton(props) {
    const { title, Icon, path } = props;
    let activeIndicator = null;

    if (useLocation().pathname === path) {
        activeIndicator = <div className={styles.activeIndicator} />;
    }

    return (
        <div>
        <Link to={path}>
            <button title={title} type="button" className={styles.sidebarButton}>
                {activeIndicator}
                <span className={styles.button_icon}>
                    <Icon />
                </span>
            </button>
        </Link>
        </div>
    );
}

SidebarButton.propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
};

export default SidebarButton;
