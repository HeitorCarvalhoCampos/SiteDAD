import styles from "./Hours.module.css"

export default function Hours({title, number}) {
    return (
        <div className={styles.dataHora}>
            <p>{title}</p>
            <h2>{number}</h2>
        </div>
    )
}