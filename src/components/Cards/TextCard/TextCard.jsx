import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.module.scss';

export default function TextCard({
    title, text, icon, onClick,
}) {
    return (
        <div className={classNames(styles.boxWrapper)} onClick={onClick}>
            <div className={classNames(styles.boxTitle)}>
                {icon}
                {title}
            </div>
            <div className={styles.boxContent}>{text}</div>
        </div>
    );
}

TextCard.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.object,
    onClick: PropTypes.func,
};

TextCard.defaultProps = {
    icon: null,
    onClick: () => {},
};
