import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.modules.css';

function SidebarButton(props) {
    const { title, Icon, path } = props;

    return (
        <Link to={path}>
            <button title={title} type="button" className={styles.sidebarButton}>
                <span className={styles.button_icon}>
                    <Icon />
                </span>
            </button>
        </Link>
    );
}

SidebarButton.propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.element.isRequired,
    path: PropTypes.string.isRequired,
};

export default SidebarButton;
