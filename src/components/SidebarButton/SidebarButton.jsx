import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.modules.css';

function SidebarButton(props) {
    const { title, iconName, onClick } = props;

    return (
        <button title={title} type="button" className={styles.sidebarButton} onClick={onClick}>
            <span className={styles.button_icon}>
                <i className={iconName} />
            </span>
        </button>
    );
}

SidebarButton.propTypes = {
    title: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SidebarButton;
