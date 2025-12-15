import { useState } from "react";
import styles from "./repetition.module.css";

export default function Repetition() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className={styles.repSection}>
        <button onClick={decrement}>-</button>
        <h4>{count}</h4>
        <button onClick={increment}>+</button>
        <br />
      </div>

      <button onClick={reset} className={styles.resetBtn}>
        Reset
      </button>
    </div>
  );
}
