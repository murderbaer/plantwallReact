import styles from './styles.module.scss';

export default function RowCard({children}) {
    console.log(children);
    return (
        <div className={styles.row}>
            {children}
        </div>
    );
}