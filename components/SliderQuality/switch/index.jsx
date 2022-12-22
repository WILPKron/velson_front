import styles from "../index.module.css";
import Image from "next/image"
import  ArrowPointer  from "../../../assets/images/ArrowPointer.svg";

const dots = [1, 2, 3, 4];

const Switch = ({ active, setActive }) => {
    return (
        <div className={styles.slider__switch}>
            <Image src={ArrowPointer}
                className={active === 1 ? styles.disabled : ""}
                onClick={() => setActive(active - 1)}
            />
            {dots.map((dot) => (
                <div
                    key={dot}
                    className={`${styles.switch__dot} ${
                        active === dot && styles.switch__dot_active
                    }`}
                    onClick={() => setActive(dot)}
                />
            ))}
            <Image src={ArrowPointer}
                className={active === 4 ? styles.disabled : ""}
                onClick={() => setActive(active + 1)}
            />
        </div>
    );
};

export default Switch;
