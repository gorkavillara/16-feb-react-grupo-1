import React from "react"
import styles from "./AstronautaLoader.module.scss"

const AstronautaLoader = () => {
    return (
        <>
            <div className={styles["box-of-star1"]}>
                <div
                    className={`${styles.star} ${styles["star-position1"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position2"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position3"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position4"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position5"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position6"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position7"]}`}
                ></div>
            </div>
            <div className={styles["box-of-star2"]}>
                <div
                    className={`${styles["star"]} ${styles["star-position1"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position2"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position3"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position4"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position5"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position6"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position7"]}`}
                ></div>
            </div>
            <div className={styles["box-of-star3"]}>
                <div
                    className={`${styles["star"]} ${styles["star-position1"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position2"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position3"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position4"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position5"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position6"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position7"]}`}
                ></div>
            </div>
            <div className={styles["box-of-star4"]}>
                <div
                    className={`${styles["star"]} ${styles["star-position1"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position2"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position3"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position4"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position5"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position6"]}`}
                ></div>
                <div
                    className={`${styles["star"]} ${styles["star-position7"]}`}
                ></div>
            </div>
            <div className={styles["astronaut"]} data-js="astro">
                <div className={styles.head}></div>
                <div className={`${styles["arm"]} ${styles["arm-left"]}`}></div>
                <div
                    className={`${styles["arm"]} ${styles["arm-right"]}`}
                ></div>
                <div className={styles["body"]}>
                    <div className={styles["panel"]}></div>
                </div>
                <div className={`${styles["leg"]} ${styles["leg-left"]}`}></div>
                <div
                    className={`${styles["leg"]} ${styles["leg-right"]}`}
                ></div>
                <div className={styles["schoolbag"]}></div>
            </div>
        </>
    )
}

export default AstronautaLoader
