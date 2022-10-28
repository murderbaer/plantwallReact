import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.modules.css';

function SidebarButton(props) {
    const { title, iconName, path } = props;

    return (
        <Link to={path}>
            <button title={title} type="button" className={styles.sidebarButton}>
                <span className={styles.button_icon}>
                    <i className={iconName} />
                </span>
            </button>
        </Link>
    );
}

SidebarButton.propTypes = {
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default SidebarButton;
