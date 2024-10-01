import Hours from "../Hours/Hours"
import styles from "./Timer.module.css"

export default function Timer() {
    return (
        <div className={styles.hours}>
            <Hours title="Days" number="03"/>
            <p className={styles.pontinho}>:</p>
            <Hours title="Hours" number="23"/>
            <p className={styles.pontinho}>:</p>
            <Hours title="Minutes" number="19"/>
            <p className={styles.pontinho}>:</p>
            <Hours title="Seconds" number="56"/>
        </div>
    )
}