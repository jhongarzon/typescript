import { useState } from "react";
import styles from "../styles/styles.module.css";
export const ProductCart = () => {
  const [counter, setCounter] = useState<number>(0);
  const increaseBy = (value: number) => {
    setCounter((prev) => Math.max(prev + value, 0));
  };
  return (
    <div className={styles.productCard}>
      <img className={styles.productImg} src="./coffee-mug.png"></img>
      <span className={styles.productDescription}>Coffee Mug</span>
      <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
          -
        </button>
        <div className={styles.countLabel}>{counter}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
          +
        </button>
      </div>
    </div>
  );
};
