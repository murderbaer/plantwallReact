import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

export default function Home() {
    return (
        <div className={styles.home}>
            <div className={classNames(styles.generalInfo, styles.box)}>
                Title
            </div>
            <div className={styles.row}>
                <div className={classNames(styles.left, styles.box)}>
                    left
                </div>
                <div className={classNames(styles.right, styles.box)}>
                    right
                </div>
            </div>
        </div>
    );
}
