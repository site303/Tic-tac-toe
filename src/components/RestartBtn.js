import React from "react";
import styles from "./TicTacToe.module.css";

export default function RestartBtn({ handleClear }) {
  return (
    <button className={styles.restartBtn} onClick={handleClear}>
      Restart
    </button>
  );
}
