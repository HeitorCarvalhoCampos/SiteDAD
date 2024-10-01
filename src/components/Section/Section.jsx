import styles from "./Section.module.css"
import Timer from "../Timer/Timer"

export default function Section({title, subtitle, products}) {
    return (
        <div className={styles.container}>
            <div className={styles.subtitle}>
                <div className={styles.barrinha}></div>
                <p>{subtitle}</p>
            </div>
            <div className={styles.subcontainer}>
                <h2>{title}</h2>
                <Timer />
            </div>
        </div>
    )
}