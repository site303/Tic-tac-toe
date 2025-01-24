
import styles from "./TicTacToe.module.css";

export default function Square({value, onSquareClick}) {
  return (
      <button className={styles.sqrBtn} onClick={onSquareClick}>
        {value}
      </button>
  );
}





